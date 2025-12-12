LootJS.lootTables(e => {
    let mc = 'minecraft', ex = 'exposure', ee = 'exposure_expanded'
    function photo(image_name, weight) {
        return LootEntry.of(`${ex}:photograph`)
            .jsonFunction({
                function: `${mc}:set_components`,
                components: {
                    'exposure:photograph_frame': {
                        identifier: {
                            texture: `${ex}:textures/${ex}/mineshaft/${image_name}.png`
                        }
                    }
                }
            })
            .withWeight(weight)
    }
    e.create('lc:tables/structure/mineshaft/exposure').createPool(pool => {
        pool.addEntry(photo('tunnel',          10))
        pool.addEntry(photo('skeleton',         9))
        pool.addEntry(photo('skeleton_smirk',   1))
        pool.addEntry(LootEntry.of(`${ee}:spider_filter`).withWeight(17))
        pool.addEntry(LootEntry.of(`${ee}:sobel_filter`).withWeight(13))
    })
})