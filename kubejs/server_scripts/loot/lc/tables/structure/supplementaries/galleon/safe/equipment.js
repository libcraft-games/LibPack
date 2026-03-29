LootJS.lootTables(e => {
    let a = 'artifacts'
    let mc = 'minecraft'
    let sa = 'sweetyarchaeology'
    let su = 'supplementaries'
    let table = e.create(`lc:tables/structure/${su}/galleon/safe/equipment`)
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:leather_chestplate`).withWeight(3)
                        .jsonFunction({
                            function: `${mc}:set_components`,
                            components: {
                                trim: {
                                    material: `${mc}:resin`,
                                    pattern: `${mc}:vex`
                                },
                                dyed_color: { rgb: 3418662 }
                            }
                        })
                        .setName(Component.of("Captain's Coat").italic(false))
                        .enchantWithLevels([10, 25])
                    )
        pool.addEntry(LootEntry.of(`${mc}:golden_sword`).withWeight(3).enchantWithLevels([19, 29]))
        pool.addEntry(LootEntry.of(`${mc}:iron_axe`).withWeight(2).enchantWithLevels([10, 25]))
    })
})