LootJS.lootTables(e => {
    let bw = 'basicweapons'
    let mc = 'minecraft'
    e.create('lc:tables/general/underwater/buried_treasure_map').createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:map`).withWeight(4)
            .jsonFunction({
                function: `${mc}:exploration_map`,
                decoration: `${mc}:red_x`,
                destination: `${mc}:on_treasure_maps`,
                skip_existing_chunks: false,
                zoom: 1
            })
            .jsonFunction({
                function: `${mc}:set_name`,
                name: {
                    translate: "filled_map.buried_treasure"
                },
                target: "item_name"
            }))
    })
})