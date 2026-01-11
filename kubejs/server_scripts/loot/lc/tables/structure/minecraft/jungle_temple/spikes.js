LootJS.lootTables(e => {
    let mc = 'minecraft'
    let su = 'supplementaries'
    let table = e.create('lc:tables/structure/minecraft/jungle_temple/spikes')
    function spikesWithPotion(potion) {
        return LootEntry.of(`${su}:bamboo_spikes_tipped`).addPotion(potion).jsonFunction({
            function: `${su}:set_charges`,
            charges: {
                type: `${mc}:uniform`,
                min_inclusive: 20,
                max_inclusive: 200
            }
        })
    }
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${su}:bamboo_spikes`).withWeight(5))
        pool.addEntry(spikesWithPotion(`${mc}:poison`).withWeight(4))
        pool.addEntry(spikesWithPotion(`${mc}:long_poison`).withWeight(2))
        pool.addEntry(spikesWithPotion(`${mc}:strong_poison`).withWeight(1))
    })
})