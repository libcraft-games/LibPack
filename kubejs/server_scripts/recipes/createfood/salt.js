ServerEvents.recipes(e => {
    let ed = 'expandeddelight'
    let cf = 'createfood'
    e.remove({output: `${ed}:salt`})
    e.custom({
        type: 'farmersdelight:cutting',
        ingredients: [{item: `${ed}:salt_rock`}],
        tool: {tag: 'expandeddelight:crushing_tools'},
        result: [
            {
                item: {
                    count: 2,
                    id: `${cf}:salt`
                }
            },
            {
                chance: 0.15,
                item: {
                    count: 1,
                    id: `${cf}:salt`
                }
            }
        ]
    })
    e.custom({
        type: 'create:milling',
        processing_time: 200,
        ingredients: [{item: `${ed}:salt_rock`}],
        results: [
            {
                id: `${cf}:salt`, 
                count: 2
            },
            {
                chance: 0.25,
                id: `${cf}:salt`,
                count: 1
            }
        ]
    })
    e.custom({
        type: 'create:milling',
        processing_time: 200,
        ingredients: [{tag: `c:ores/salt`}],
        results: [
            {
                id: `${cf}:salt`, 
                count: 4
            },
            {
                chance: 0.75,
                id: `${cf}:salt`,
                count: 1
            }
        ]
    })
    e.custom({
        type: `${ie}:crusher`,
        energy: 1200,
        input: {item: `${ed}:salt_rock`},
        result: {id: `${cf}:salt`, count: 2},
        secondaries: [
            {output: {id: `${cf}:salt`}, chance: 0.25}
        ]
    })
    e.custom({
        type: `${ie}:crusher`,
        energy: 2400,
        input: {tag: `c:ores/salt`},
        result: {id: `${cf}:salt`, count: 4},
        secondaries: [
            {output: {id: `${cf}:salt`}, chance: 0.75}
        ]
    })
})