ServerEvents.recipes(e => {
    let file = 'recipes/_misc/tag/c/bookshelves.js'
    e.replaceInput(
        {input: 'minecraft:bookshelf'},
        'minecraft:bookshelf',
        '#c:bookshelves'
    )
    console.log(`applied changes from ${file}`);
});