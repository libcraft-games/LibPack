let file = 'recipes/_misc/leather_tag.js'

ServerEvents.recipes(e => {
    e.replaceInput(
        {input: 'minecraft:leather'},
        'minecraft:leather',
        '#c:leathers'
    )
    console.log(`applied changes from ${file}`);
});