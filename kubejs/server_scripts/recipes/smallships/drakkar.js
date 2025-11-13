ServerEvents.recipes(e => {
    let type = 'drakkar'
    let file = `recipes/${ss}/${type}.js`
    
    vanilla_woods.forEach(wood => {
        let ship = shipOf(wood, type)
        e.remove({output: ship})
        e.shaped(
            ship,
            [
                'RSs',
                'CCB'
            ], {
                S: `${ss}:sail`,
                R: '#c:ropes',
                s: `minecraft:${wood}_stairs`,
                C: chestBoatOf(wood),
                B: boatOf(wood)
            }
        )
    })

    console.log(`applied changes from ${file}`);
});