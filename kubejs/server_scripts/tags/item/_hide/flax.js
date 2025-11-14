ServerEvents.tags('item', e => {
    let file = 'tags/item/_hide/flax.js'
    let flax = 'supplementaries:flax'
    let items = [
        flax,
        `${flax}_seeds`,
        `${flax}_block`
    ]
    items.forEach(item => {
        e.removeAllTagsFrom(item)
    })
    console.log(`applied changes from ${file}`);
})