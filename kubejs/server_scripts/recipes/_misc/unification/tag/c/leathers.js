ServerEvents.recipes(e => {
    let file = 'recipes/_misc/unification/tag/c/leathers.js'
    e.replaceInput(
        {input: 'minecraft:leather'},
        'minecraft:leather',
        '#c:leathers'
    )
    console.log(`applied changes from ${file}`);
});