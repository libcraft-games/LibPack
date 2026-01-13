LootJS.lootTables(e => {
    let ee = 'exposure_expanded'
    let ex = 'exposure'
    let mc = 'minecraft'
    let su = 'supplementaries'
    let table = e.getLootTable(`${mc}:chests/shipwreck_map`)

    function shipwreck_frame(textureName, channel) {
        return {
            type: 'black_and_white',
            extra_data: {
                color_channel: channel
            },
            identifier: {
                texture: `${ex}:textures/${ex}/shipwreck/chromatic/${textureName}_${channel[0]}.png`
            }
        }
    }
    function shipwreck_roll(textureNames) {
        let roll = []        
        for(let photo of textureNames) 
            for(let channel of ['red', 'green', 'blue']) 
                roll.push(shipwreck_frame(photo, channel))
        return exposure_film(`${ex}:black_and_white_film`, 56, roll)
    }

    table.clear()
    table.createPool(pool => {
        pool.addEntry(LootEntry.of(`${mc}:map`)
            .jsonFunction({
                function: `${mc}:exploration_map`,
                decoration: `${mc}:red_x`,
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
    table.createPool(pool => {
        pool.rolls(3)
        pool.addEntry(LootEntry.of(`${mc}:paper`, [1, 10]).withWeight(20))
        pool.addEntry(LootEntry.of(`${mc}:ink_sac`, [1, 4]).withWeight(10))
        pool.addEntry(LootEntry.of(`${mc}:map`, [1, 2]).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:slime_ball`, [1, 3]).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:glow_ink_sac`, [1, 2]).withWeight(2))
        pool.addEntry(LootEntry.of(`${su}:antique_ink`, [1, 2]).withWeight(2))
        pool.addEntry(LootEntry.of(`${mc}:compass`).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:spyglass`).withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls(2)
        pool.addEntry(LootEntry.empty().withWeight(8))
        pool.addEntry(LootEntry.of(`${mc}:coast_armor_trim_smithing_template`).withWeight(10))
        pool.addEntry(LootEntry.of(`${ee}:scan_pincushion_filter`).withWeight(8))
        pool.addEntry(shipwreck_roll(['cargo_crates', 'deck_sunset_1', 'deck_sunset_2']).withWeight(3))
        pool.addEntry(shipwreck_roll(['cargo_gold_1', 'cargo_gold_2', 'deck_sunset_3', 'deck_sunset_4']).withWeight(3))
        for(let i = 1; i <= 4; i++) {
            pool.addEntry(exposure_addPhoto(LootEntry.of(`${ex}:aged_photograph`), `shipwreck/ship_dock_${i}`).withWeight(2))
        }
    })
})
LootJS.modifiers(e => {
    // todo: replace each of these with just disabling the corresponding feature in the mod's settings, if possible
    e.removeGlobalModifiers(/exposure:.*shipwreck.*/)
})