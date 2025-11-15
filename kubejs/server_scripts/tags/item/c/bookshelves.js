ServerEvents.tags('item', e => {
    
    let tag = 'c:bookshelves'
    let tf = 'twilightforest'
    let items = [
        '#chipped:bookshelf',
        `${tf}:canopy_bookshelf`
    ]
    items.forEach(item => {
        e.add(tag, item)
    })
    console.log(`applied all changes successfully!`);
})