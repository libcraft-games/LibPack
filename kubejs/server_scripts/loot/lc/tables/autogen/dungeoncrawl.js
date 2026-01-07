// e                LootTableEventJS                the event to create tables in
// stage            int                             the floor which is being modified
// fillers          List<ItemId>                    items to set the vibes
// shaders          List<Shader>                    shaders to generate. see global.ie.shaders
// treasure         List<LootEntry>                 very rare items
// potions          List<
//                      '' | 'splash_' | 'lingering_',
//                      string,
//                      int>                        type, id, weight of potions
function assembleDungeonLoot(e, stage, fillers, shaders, treasure, potions) {
    let dc = 'dungeoncrawl'
    let basePath = `lc:tables/autogen/${dc}/stage`
    // ======== FUNCTIONS ========
    function pathFor(name, stage) {
        return `lc:tables/autogen/${dc}/stage_${stage}/${name}`
    }
    function assembleResources(e, stage) {
        let path = pathFor('resources', stage)
        let table = e.create(path).createPool(pool => {
            for(let [item, tier, range] of dc_loot.resources) {
                console.info(`${item} ${tier} ${range}`)
                if(tier > stage || (range != null && (stage < range[0] || stage > range[1])))
                    continue
                let count = tier == stage ? 1 : [1, 1 + 2 * (stage - tier)]
                pool.addEntry(LootEntry.of(item, count).withWeight(10 - tier).withQuality(tier))
            }
        })
        return path
    }
    function enchantEquipment(item, tier, stage, weightOffset) {
        let tierDiff = stage - tier
        let result = LootEntry.of(item).withWeight(5 - tier + weightOffset).withQuality(tier).damage([0.15, 1])
        if(tierDiff > 0)
            result = result.enchantWithLevels([tierDiff * 10, tierDiff * 10 + 20])
        return result
    }
    function assembleArmor(e, stage) {
        let path = pathFor('armor', stage)
        let table = e.create(path).createPool(pool => {
            for(let [material, tier] of dc_loot.armor) {
                let group = []
                let tierDiff = stage - tier
                if(tier > stage || tierDiff > 2) 
                    continue
                for(let type of ['helmet', 'chestplate', 'leggings', 'boots']) {
                    group.push((enchantEquipment(`minecraft:${material}_${type}`, tier, stage, 0)))
                }
                // removed bc it starts a new row for some reason and i care more about readability than gloves
                // group.push((dc_enchantEquipment(`aether:${material}_gloves`, tier, stage, 0)))
                pool.addEntry(LootEntry.group(group))
            }
        })
        return path
    }
    function assembleWeapons(e, stage) {
        let path = pathFor('weapons', stage)
        let table = e.create(path).createPool(pool => {
            for(let [material, tier] of dc_loot.toolMaterials) {
                let group = []
                let tierDiff = stage - tier
                if(tier > stage || tierDiff > 2)
                    continue
                for(let [namespace, type, weight] of dc_loot.weaponWeights) {
                    let itemId = `${namespace}:${material}_${type}`
                    if(type === 'knife' && material === 'stone')
                        itemId = `${namespace}:flint_${type}`
                    group.push((enchantEquipment(itemId, tier, stage, weight)))
                }
                if(group.length > 0)
                    pool.addEntry(LootEntry.group(group))
            }
            let materialless = []
            for(let [id, minStage] of dc_loot.materiallessWeapons) {
                let tierDiff = stage - minStage
                if(stage < minStage || tierDiff > 2)
                    continue
                materialless.push(enchantEquipment(id, minStage, stage, 10))
            }
            if(materialless.length > 0)
                pool.addEntry(LootEntry.group(materialless))
        })
        return path
    }
    function assembleFood(e, stage) {
        let path = pathFor('food', stage)
        let table = e.create(path).createPool(pool => {
            for(let [item, count, weight, minStage] of dc_loot.food) {
                if(stage >= minStage)
                    pool.addEntry(LootEntry.of(item, count).withWeight(weight).withQuality(minStage - 2))
            }
        })
        return path
    }
    function assembleTreasure(e, stage, entries) {
        let path = pathFor('treasure', stage)
        let table = e.create(path).createPool(pool => {
            for(let entry of entries)
                pool.addEntry(entry)
        })
        return path
    }
    function assemblePotions(e, stage, potions) {
        let path = pathFor('potions', stage)
        let table = e.create(path).createPool(pool => {
            for(let [type, id, weight] of potions) {
                pool.addEntry(LootEntry.of(`minecraft:${type}potion`).addPotion(id).withWeight(weight))
            }
        })
        return path
    }
    // ======== FUNCTIONS ========

    let mc = 'minecraft'
    let table = e.getLootTable(`dungeoncrawl:chests/stage_${stage}`)
    table.clear()
    // rewards
    table.createPool(pool => {
        pool.rolls([stage, 2 * stage])
        pool.addEntry(LootEntry.reference(assembleResources(e, stage)).withWeight(10))
    })
    table.createPool(pool => {
        pool.rolls([0, Math.ceil(stage / 2)])
        if(stage < 5)
            pool.addEntry(LootEntry.empty().withWeight(10 - stage * 2))
        pool.addEntry(LootEntry.reference(assembleArmor(e, stage)).withWeight(5))
        pool.addEntry(LootEntry.reference(assembleWeapons(e, stage)).withWeight(5))
        pool.addEntry(LootEntry.of('minecraft:book').enchantWithLevels([stage * 5 + 5, stage * 5 + 15]).withWeight(6))
        if(shaders != null && shaders.length > 0) {
            pool.addEntry(LootEntry.reference(ie_generateShaderTable(e, shaders)).withWeight(1))
        }
        pool.addEntry(LootEntry.reference(assembleTreasure(e, stage, treasure)).withWeight(1))
    })
    // dungeon supplies
    table.createPool(pool => {
        pool.rolls(3)
        pool.addEntry(LootEntry.reference('lc:tables/structure/dungeoncrawl/dungeon/supplies').withWeight(3))
        pool.addEntry(LootEntry.reference('lc:tables/structure/dungeoncrawl/dungeon/raw_supplies').withWeight(2))
        pool.addEntry(LootEntry.reference(assembleFood(e, stage)).withWeight(3))
        pool.addEntry(LootEntry.reference('lc:tables/structure/dungeoncrawl/dungeon/rare_supplies').withWeight(1))
        pool.addEntry(LootEntry.reference(assemblePotions(e, stage, potions)).withWeight(1))
    })
    // filler
    table.createPool(pool => {
        pool.rolls([5 - stage, 7 - stage])
        for(let [item, count, weight] of fillers) {
            pool.addEntry(LootEntry.of(item, count).withWeight(weight))
        }
    })
    return table
}