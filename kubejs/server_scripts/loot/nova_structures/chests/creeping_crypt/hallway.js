LootJS.lootTables(e => {
    let a = 'artifacts'
    let ae = 'aether'
    let bw = 'basicweapons'
    let cd = 'createdeco'
    let mc = 'minecraft'
    let su = 'supplementaries'
    let table = e.getLootTable('nova_structures:chests/creeping_crypt/crypt_hallway')
    table.clear()
    table.createPool(pool => {
        pool.rolls(1)
        pool.addEntry(LootEntry.of(`${mc}:iron_nugget`, [7, 12]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:emerald`, [3, 8]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:redstone`, [2, 7]).withWeight(2))
    })
    table.createPool(pool => {
        pool.rolls([2, 4])
        pool.addEntry(LootEntry.of(`${su}:bomb`, [2, 3]).withWeight(10))
        pool.addEntry(LootEntry.of(`${mc}:tnt`, [2, 3]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:gunpowder`, [4, 7]).withWeight(4))
        pool.addEntry(LootEntry.of(`${su}:bomb_blue`, [1, 3]).withWeight(10))
    })
    table.createPool(pool => {
        pool.addEntry(LootEntry.empty().withWeight(20))
        pool.addEntry(LootEntry.of(`${bw}:iron_hammer`).withWeight(5).enchantRandomly(`${mc}:knockback`).enchantWithLevels(5).damage([0.35, 0.65]))
        pool.addEntry(LootEntry.of(`${mc}:chainmail_helmet`).withWeight(1).enchantRandomly(`${mc}:blast_protection`).enchantWithLevels(5).damage([0.75, 1]))
        pool.addEntry(LootEntry.of(`${mc}:chainmail_chestplate`).withWeight(1).enchantRandomly(`${mc}:blast_protection`).enchantWithLevels(5).damage([0.75, 1]))
        pool.addEntry(LootEntry.of(`${mc}:chainmail_leggings`).withWeight(1).enchantRandomly(`${mc}:blast_protection`).enchantWithLevels(5).damage([0.75, 1]))
        pool.addEntry(LootEntry.of(`${mc}:chainmail_boots`).withWeight(1).enchantRandomly(`${mc}:blast_protection`).enchantWithLevels(5).damage([0.75, 1]))
        pool.addEntry(LootEntry.of(`${ae}:chainmail_gloves`).withWeight(1).enchantRandomly(`${mc}:blast_protection`).enchantWithLevels(5).damage([0.75, 1]))
    })
})