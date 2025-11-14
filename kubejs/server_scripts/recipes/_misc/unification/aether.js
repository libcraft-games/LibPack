// removes separate Aether-added recipes where tags are now used instead 
// see #35, #51, #111
ServerEvents.recipes(e => {
    let file = 'recipes/_misc/unification/aether.js'
    let inputs = [
        'skyroot_planks',
        'skyroot_bookshelf'
    ]
    let whitelistedOutputs = [

    ]
    inputs.forEach(inputItem => {
        e.remove({
            input: `aether:${inputItem}`,
            not: [
                {input: '#minecraft:planks'}
            ]
        })
    })
    console.log(`applied changes from ${file}`);
});