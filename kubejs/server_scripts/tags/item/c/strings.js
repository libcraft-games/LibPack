ServerEvents.tags('item', e => {
    let file = 'tags/item/c/strings.js'
    e.add('c:strings', 'crittersandcompanions:silk')
    console.log(`applied changes from ${file}`);
})