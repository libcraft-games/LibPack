ServerEvents.recipes(e => {
    let es = 'enderscape'
    let ie = 'immersiveengineering'
    let bop = 'biomesoplenty'
    for(let sproutType of ['alluring', 'repulsive']) {
        let sprout = `${es}:${sproutType}_magnia_sprout`
        let substrate = `${es}:${sproutType}_magnia`
        e.custom({
                type: `${ie}:cloche`,
                fluid: {
                    fluid: `${bop}:liquid_null`
                },
                input: {item: sprout},
                time: 1000,
                render:
                {
                    block: sprout,
                    type: `${ie}:generic`
                },
                results: [{id: sprout}],
                soil: {item: substrate}
            });
    }
    console.log(`applied all changes successfully!`);
});