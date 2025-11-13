let file = "recipes/immersiveengineering/dust_sulfur.js";

let ie = 'immersiveengineering'
let brimstone = 'biomesoplenty:brimstone'
let sulfur = `${ie}:dust_sulfur`

ServerEvents.recipes(e => {
    e.custom({
        type: 'create:milling',
        processing_time: 200,
        ingredients: [{item: brimstone}],
        results: [
            {id: sulfur, count: 1},
            {id: sulfur, count: 1, chance: 0.85}
        ]
    })
    e.custom({
        type: `${ie}:crusher`,
        energy: 2400,
        input: {item: brimstone},
        result: {id: sulfur, count: 2},
        secondaries: [
            {output: {id: sulfur}, chance: 0.1}
        ]
    })
    
    console.log(`applied changes from ${file}`);
}); 