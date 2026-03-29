LootJS.lootTables(e => {
    let lc = 'libcraft'
    let mc = 'minecraft'

    let paths = ['keep', 'nether_keep']

    for(let prefix of ['', 'nether_']) {
        let table = e.getLootTable(`nova_structures:spawner_projectile/${prefix}keep/projectiles_keep`)
        table.clear()
        table.createPool(pool => {
            pool.rolls(1)
            pool.addEntry(LootEntry.of(`${mc}:lingering_potion`).addPotion(`${mc}:slowness`))
            pool.addEntry(LootEntry.of(`${mc}:lingering_potion`).addPotion(`${lc}:blindness`))
            pool.addEntry(LootEntry.of(`${mc}:fire_charge`))
            pool.addEntry(LootEntry.of(`${mc}:lingering_potion`).addPotion(`${lc}:wither`))
            pool.addEntry(LootEntry.of(`${mc}:splash_potion`).addPotion(`${lc}:wither`))
            pool.addEntry(LootEntry.of(`${mc}:tipped_arrow`).addPotion(`${lc}:wither`))
        })
    }
})