LootJS.lootTables(e => {
    let bw = 'basicweapons'
    let c  = 'create'
    let cc = 'chalk'
    let ch = 'chipped'
    let fd = 'farmersdelight'
    let ie = global.ie.namespace
    let ii = 'illagerinvasion'
    let ip = 'immersive_paintings'
    let mc = 'minecraft'
    let me = 'measurements'
    let rp = 'redstonepen'
    let sa = 'sweety_archaeology'
    let sq = 'suppsquared'
    let su = 'supplementaries'
    let uf = 'unusual_furniture'

    let table = e.getLootTable('nova_structures:chests/illager_hideout_utility')

    table.clear()
    table.createPool(pool => {
        pool.rolls([1, 3])
        pool.addEntry(LootEntry.of(`${mc}:shears`)                      .withWeight(7).damage([0.4, 1]))
        pool.addEntry(LootEntry.of(`${mc}:flint_and_steel`)             .withWeight(6).damage([0.4, 1]))
        pool.addEntry(LootEntry.of(`${fd}:iron_knife`)                  .withWeight(5).damage([0.4, 1]))
        pool.addEntry(LootEntry.of(`${bw}:steel_dagger`)                .withWeight(5).damage([0.4, 0.6]))
        pool.addEntry(LootEntry.of(`${mc}:brush`)                       .withWeight(4).damage([0.8, 1]))
        pool.addEntry(LootEntry.of(`${sa}:climbing_axe`)                .withWeight(3).damage([0.4, 0.6]))
        pool.addEntry(LootEntry.of(`${fd}:skillet`)                     .withWeight(3).damage([0.4, 0.6]))
        pool.addEntry(LootEntry.of(`${ie}:hammer`)                      .withWeight(3).damage([0.4, 0.6]))
        pool.addEntry(LootEntry.of(`${ie}:wirecutter`)                  .withWeight(3).damage([0.4, 0.6]))
        pool.addEntry(LootEntry.of(`${ie}:screwdriver`)                 .withWeight(2))
        pool.addEntry(LootEntry.of(`${ch}:saw`)                         .withWeight(2))
        pool.addEntry(LootEntry.of(`${ch}:chisel`)                      .withWeight(2))
        pool.addEntry(LootEntry.of(`${su}:wrench`)                      .withWeight(2))
        pool.addEntry(LootEntry.of(`${me}:tape_measure`)                .withWeight(2))
        pool.addEntry(LootEntry.of(`${rp}:quill`)                       .withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:spyglass`)                    .withWeight(2))
        pool.addEntry(LootEntry.of(`${c}:wrench`)                       .withWeight(1))
        pool.addEntry(LootEntry.of(`${ie}:maintenance_kit`)             .withWeight(1))
        pool.addEntry(LootEntry.of(`${ii}:platinum_infused_hatchet`)    .withWeight(1).damage([0.2, 0.6]))
        pool.addEntry(LootEntry.of(`${uf}:rakes`)                       .withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls([2, 4])
        pool.addEntry(LootEntry.of(`${mc}:stick`, [3, 17]).withWeight(13))
        pool.addEntry(LootEntry.of(`${fd}:canvas`, [3, 5]).withWeight(11))
        pool.addEntry(LootEntry.of(`${su}:rope`, [1, 4]).withWeight(9))
        pool.addEntry(LootEntry.of(`${mc}:leather`, [1, 3]).withWeight(7))
        pool.addEntry(LootEntry.of(`${mc}:emerald`, [1, 5]).withWeight(6))
        pool.addEntry(LootEntry.of(`${mc}:iron_ingot`, [1, 4]).withWeight(5))
        pool.addEntry(LootEntry.of(`${ii}:platinum_chunk`, [1, 4]).withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls([1, 3])
        pool.addEntry(LootEntry.of(`${mc}:scaffolding`, [4, 16]).withWeight(8))
        pool.addEntry(LootEntry.of(`${uf}:wooden_barrier`, [1, 6]).withWeight(6))
        pool.addEntry(LootEntry.of(`${ie}:razor_wire`, [2, 6]).withWeight(6))
        pool.addEntry(LootEntry.of(`${mc}:tripwire_hook`, [1, 3]).withWeight(5))
        pool.addEntry(LootEntry.reference('lc:tables/general/mining/lighting').withWeight(5))
        pool.addEntry(LootEntry.of(`${uf}:road_works_barrier`, [1, 6]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:armor_stand`).withWeight(4))
        pool.addEntry(LootEntry.of(`${su}:cage`).withWeight(4))
        pool.addEntry(LootEntry.of(`${su}:crank`).withWeight(4))
        pool.addEntry(LootEntry.of(`${su}:lock_block`).withWeight(3))
        pool.addEntry(LootEntry.of(`${su}:clock_block`).withWeight(3))
        pool.addEntry(LootEntry.of(`${su}:speaker_block`).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:hopper`, [3, 5]).withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls(3)
        pool.addEntry(LootEntry.empty().withWeight(12))
        pool.addEntry(LootEntry.of(`${cc}:gray_chalk`).withWeight(3).damage([0.4, 1]))
        pool.addEntry(LootEntry.of(`${cc}:brown_chalk`).withWeight(3).damage([0.4, 1]))
        pool.addEntry(LootEntry.of(`${cc}:red_chalk`).withWeight(3).damage([0.4, 1]))
        pool.addEntry(LootEntry.of(`${cc}:purple_chalk`).withWeight(3).damage([0.4, 1]))
        pool.addEntry(LootEntry.of(`${cc}:green_chalk`).withWeight(3).damage([0.4, 1]))
        pool.addEntry(LootEntry.of(`${ip}:graffiti`, [1, 3]).withWeight(2))
        pool.addEntry(LootEntry.of(`${ip}:glow_graffiti`, [1, 3]).withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls(1)
        pool.addEntry(LootEntry.of(`${mc}:compass`).withWeight(6))
        pool.addEntry(LootEntry.of(`${su}:altimeter`).withWeight(6))
        pool.addEntry(LootEntry.of(`${mc}:clock`).withWeight(6))
        pool.addEntry(LootEntry.of(`${sq}:sack_gray`).withWeight(4))
        pool.addEntry(LootEntry.of(`${sq}:sack_brown`).withWeight(4))
        pool.addEntry(LootEntry.of(`${c}:clipboard`).withWeight(3))
        pool.addEntry(LootEntry.of(`${ii}:lost_candle`).withWeight(1))
    })
})