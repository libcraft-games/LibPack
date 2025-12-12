LootJS.lootTables(e => {
    let ie = 'immersiveengineering', mc = 'minecraft', su = 'supplementaries'
    e.create('lc:tables/structure/mineshaft/mining_info').createPool(pool => {
        pool.addEntry(LootEntry.of(`${su}:slice_map`).withWeight(3))
        pool.addEntry(LootEntry.of(`${su}:altimeter`).withWeight(2))
        pool.addEntry(LootEntry.of(`${ie}:survey_tools`).damage([0.5, 1]).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:clock`))
        pool.addEntry(
            LootEntry.of(`${mc}:map`)
                     .setName(Component.translatable('item.sweety_archaeology.buried_mineshaft_map'))
                     .jsonFunction({
                        function: `${mc}:exploration_map`,
                        search_radius: 30,
                        destination: `sweety_archaeology:on_mineshaft_maps`,
                        decoration: 'red_x',
                        skip_existing_chunks: false,
                        zoom: 1
                     }))
    })
})