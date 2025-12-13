ServerEvents.tags('item', e => {
    let tag = 'minecraft:bookshelf_books'
    let items = [
        'chipped:alchemy_book',
        'map_atlases:atlas',
        'scriptor:book_of_books',
        'scriptor:scriptionary',
        'scriptor:tome_tier1',
        'scriptor:tome_tier2',
        'scriptor:tome_tier3',
        'scriptor:tome_tier4',
        'modopedia:book'
    ]
    items.forEach(item => {
        e.add(tag, item)
    })
    console.log(`applied all changes successfully!`);
})