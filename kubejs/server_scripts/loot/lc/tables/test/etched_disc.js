LootJS.lootTables(e => {
    let table = e.create('lc:tables/test/etched_disc')
    for(let [_, pattern] in EtchedLabelPattern) {
        console.log(`creating test disc for pattern ${pattern}...`)
        table.createPool(pool => {            
            pool.addEntry(
                CreateEtchedMusicDiscEntry(
                    EtchedTrackData(
                        'https://c418.bandcamp.com/track/the-weirdest-year-of-your-life',
                        'the weirdest year of your life',
                        'c418'
                    ),
                    null,
                    EtchedLabelAppearance(
                        pattern,
                        '#000000',
                        '#FF00FF'
                    )
                ).setName(`${pattern} example`)
            )
        })
    }
})