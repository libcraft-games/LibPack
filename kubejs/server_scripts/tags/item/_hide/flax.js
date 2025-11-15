ServerEvents.tags('item', e => {
    
    let flax = 'supplementaries:flax'
    let items = [
        flax,
        `${flax}_seeds`,
        `${flax}_block`
    ]
    items.forEach(item => {
        e.removeAllTagsFrom(item)
    })
    console.log(`applied all changes successfully!`);
})