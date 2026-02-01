LootJS.lootTables(e => {
    let ie = global.ie.namespace
    let mc = 'minecraft'

    let table = e.getLootTable(`${ie}:chests/engineers_house`)
    table.clear()

    function blueprint(id) {
        return LootEntry.of(`${ie}:blueprint`)
                        .jsonFunction({
                            function: `${mc}:set_components`,
                            components: {
                                'immersiveengineering:blueprint': id
                            }
                        })
                        .jsonFunction({
                            function: `${ie}:secret_bluprintz`,
                            conditions: [
                                {
                                    condition: `${mc}:random_chance`,
                                    chance: 0.1
                                }
                            ]
                        })
    }

    table.createPool(pool => {
        pool.rolls([0, 2])
        pool.addEntry(LootEntry.of(`${ie}:hammer`).withWeight(8).damage([0.6, 1]))
        pool.addEntry(LootEntry.of(`${ie}:wirecutter`).withWeight(8).damage([0.6, 1]))
        pool.addEntry(LootEntry.of(`${ie}:screwdriver`).withWeight(5))
        pool.addEntry(LootEntry.of(`${ie}:voltmeter`).withWeight(5))
        pool.addEntry(LootEntry.of(`${ie}:toolbox`).withWeight(5))
        pool.addEntry(LootEntry.of(`${ie}:manual`).withWeight(5))
        pool.addEntry(LootEntry.of(`${ie}:maintenance_kit`).withWeight(5))
        pool.addEntry(LootEntry.of(`${ie}:pickaxe_steel`).withWeight(3).damage([0.4, 0.6]))
        pool.addEntry(LootEntry.of(`${ie}:axe_steel`).withWeight(3).damage([0.4, 0.6]))
        pool.addEntry(LootEntry.of(`${ie}:shovel_steel`).withWeight(3).damage([0.4, 0.6]))
        pool.addEntry(LootEntry.of(`${ie}:hoe_steel`).withWeight(3).damage([0.4, 0.6]))
        pool.addEntry(LootEntry.of(`${ie}:sword_steel`).withWeight(3).damage([0.4, 0.6]))
        pool.addEntry(LootEntry.of(`${ie}:jerrycan`).withWeight(2))
        pool.addEntry(LootEntry.of(`${ie}:speedloader`).withWeight(1))
    })
    table.createPool(pool => {
        pool.addEntry(LootEntry.empty().withWeight(24))
        pool.addEntry(blueprint('components').withWeight(24))
        pool.addEntry(blueprint('bullet').withWeight(16))
        pool.addEntry(blueprint('molds').withWeight(16))
        pool.addEntry(blueprint('warning_sign').withWeight(12))
        pool.addEntry(blueprint('bannerpatterns').withWeight(6))
        pool.addEntry(blueprint('specialBullet').withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls(2)
        pool.addEntry(LootEntry.empty().withWeight(12))
        pool.addEntry(LootEntry.of(`${ie}:component_iron`, [1, 2]).withWeight(8))
        pool.addEntry(LootEntry.of(`${ie}:component_steel`).withWeight(4))
        pool.addEntry(LootEntry.of(`${ie}:component_electronic`).withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls([1, 3])
        pool.addEntry(LootEntry.of(`${ie}:hemp_fabric`, [3, 5]).withWeight(8))
        pool.addEntry(LootEntry.of(`${ie}:coal_coke`, [4, 6]).withWeight(8))
        pool.addEntry(LootEntry.of(`${ie}:stick_treated`, [3, 7]).withWeight(8))
        pool.addEntry(LootEntry.of(`${ie}:stick_iron`, [2, 5]).withWeight(6))
        pool.addEntry(LootEntry.of(`${ie}:stick_steel`, [1, 3]).withWeight(4))
        pool.addEntry(LootEntry.of(`create:iron_sheet`, [2, 4]).withWeight(2))
        pool.addEntry(LootEntry.of(`${ie}:plate_steel`, [1, 2]).withWeight(1))
        pool.addEntry(LootEntry.of(`${ie}:fertilizer`, [3, 7]).withWeight(1))
        pool.addEntry(LootEntry.of(`${ie}:ersatz_leather`, [4, 11]).withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls(3)
        pool.addEntry(LootEntry.empty().withWeight(24))
        pool.addEntry(LootEntry.of(`${ie}:wirecoil_copper`, [1, 4]).withWeight(8))
        pool.addEntry(LootEntry.of(`${ie}:wirecoil_structure_rope`, [1, 3]).withWeight(4))
        pool.addEntry(LootEntry.of(`${ie}:connector_lv`, [2, 4]).withWeight(4))
        pool.addEntry(LootEntry.of(`${ie}:wirecoil_redstone`, [1, 3]).withWeight(2))
        pool.addEntry(LootEntry.of(`${ie}:connector_structural`, [2, 4]).withWeight(2))
        pool.addEntry(LootEntry.of(`${ie}:connector_redstone`, [2, 4]).withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls(1)
        pool.addEntry(LootEntry.empty().withWeight(12))
        pool.addEntry(LootEntry.of(`${ie}:conveyor_basic`, [1, 8]).withWeight(9))
        pool.addEntry(LootEntry.of(`${ie}:balloon`, [2, 4]).withWeight(6))
        pool.addEntry(LootEntry.of(`${ie}:razor_wire`, [3, 8]).withWeight(6))
        pool.addEntry(LootEntry.of(`${ie}:redstone_timer`, [1, 2]).withWeight(3))
        pool.addEntry(LootEntry.of(`${ie}:redstone_state_cell`, [1, 3]).withWeight(3))
        pool.addEntry(LootEntry.of(`${ie}:siren`).withWeight(1))
    })
})