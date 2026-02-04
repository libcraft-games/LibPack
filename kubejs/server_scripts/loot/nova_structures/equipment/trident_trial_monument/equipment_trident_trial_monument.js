LootJS.lootTables(e => {
    let bw = 'basicweapons'
    let mc = 'minecraft'
    let table = e.getLootTable('nova_structures:equipment/trident_trial_monument/equipment_trident_trial_monument')
    function trim(armor) {
        return armor.jsonFunction({
            function: `${mc}:set_components`,
            components: {
                trim: {
                    pattern: `${mc}:tide`,
                    material: `${mc}:copper`
                }
            }
        })
    }
    function armor(material, slot, thorns) {
        return trim(SpecificEnchantLevel(LootEntry.of(`${mc}:${material}_${slot}`), `${mc}:thorns`, thorns))
    }
    
    e.create('lc:tables/equipment/subtables/trident_trial_monument/1').createPool(pool => {
        pool.addEntry(armor('chainmail', 'helmet', 1))
    }).createPool(pool => {
        pool.addEntry(armor('chainmail', 'chestplate', 1))
    }).createPool(pool => {
        pool.addEntry(LootEntry.of(`${bw}:iron_spear`))
    })
    e.create('lc:tables/equipment/subtables/trident_trial_monument/2').createPool(pool => {
        pool.addEntry(armor('turtle', 'helmet', 3))
    }).createPool(pool => {
        pool.addEntry(armor('diamond', 'chestplate', 3))
    }).createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:trident`).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:trident`).withWeight(1).enchantWithLevels(20))
    })

    table.clear()
    table.createPool(pool => {
        pool.addEntry(LootEntry.reference('lc:tables/equipment/subtables/trident_trial_monument/1'))
        pool.addEntry(LootEntry.reference('lc:tables/equipment/subtables/trident_trial_monument/2'))
    })
})