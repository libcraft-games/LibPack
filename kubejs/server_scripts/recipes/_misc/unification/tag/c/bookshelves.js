ServerEvents.recipes(e => {
    e.replaceInput(
        {input: 'minecraft:bookshelf'},
        'minecraft:bookshelf',
        '#c:bookshelves'
    )
    console.log(`applied all changes successfully!`);
});