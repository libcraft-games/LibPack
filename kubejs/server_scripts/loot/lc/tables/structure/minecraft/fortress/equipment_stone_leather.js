LootJS.lootTables(e => {
    let ae = 'aether'
    let bw = 'basicweapons'
    let mc = 'minecraft'
    let ns = 'nova_structures'
    let sa = 'sweety_archaeology'
    let su = 'supplementaries'
    let table = e.create('lc:tables/structure/minecraft/fortress/equipment_stone_leather')
    function decorate(armor) {
        return armor.jsonFunction({
            function: `${mc}:set_components`,
            components: {
                trim: {
                    material: `${mc}:quartz`,
                    pattern: `${mc}:rib`
                },
                dyed_color: { rgb: 4006180 }
            }
        })
    }
    function enchantAndDamage(entry) {
        return entry.enchantWithLevels([25, 35]).damage([0.35, 0.85])
    }
    let weapons = [`${mc}:stone_sword`, `${bw}:stone_club`, `${bw}:stone_spear`]
    let armors = [`${mc}:leather_helmet`, `${mc}:leather_chestplate`, `${mc}:leather_leggings`, `${mc}:leather_boots`, `${ae}:leather_gloves`]
    table.createPool(pool => {
        for(let weapon of weapons) {
            pool.addEntry(enchantAndDamage(LootEntry.of(weapon).enchantRandomly(`${ns}:wither_coated`)))
        }
        for(let armor of armors) {
            pool.addEntry(decorate(enchantAndDamage(LootEntry.of(armor).enchantRandomly(`${ns}:antidote`))))
        }
    })
})