ServerEvents.tags('item', e => {
    let file = 'tags/item/c/bookshelves.js'
    let tag = 'c:bookshelves'
    let tf = 'twilightforest'
    let items = [
        '#chipped:bookshelf',
        `${tf}:canopy_bookshelf`
    ]
    items.forEach(item => {
        e.add(tag, item)
    })
    console.log(`applied changes from ${file}`);
})