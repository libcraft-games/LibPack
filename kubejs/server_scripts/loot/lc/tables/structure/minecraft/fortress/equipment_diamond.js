LootJS.lootTables(e => {
    let ae = 'aether'
    let bw = 'basicweapons'
    let mc = 'minecraft'
    let sa = 'sweety_archaeology'
    let su = 'supplementaries'
    let table = e.create('lc:tables/structure/minecraft/fortress/equipment_diamond')
    function adjust(item) {
        return LootEntry.of(item).enchantWithLevels([5, 15]).damage([0.15, 0.65])
    }
    let items = [
        [mc, 'sword',       2],
        [bw, 'club',        2],
        [bw, 'spear',       1],
        [mc, 'helmet',      1],
        [mc, 'chestplate',  1],
        [mc, 'leggings',    1],
        [mc, 'boots',       1],
        [ae, 'gloves',      1],
    ]
    table.createPool(pool => {
        for(let [namespace, item, weight] of items) {
            pool.addEntry(adjust(`${namespace}:diamond_${item}`).withWeight(weight))
        }
    })
})