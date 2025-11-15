ServerEvents.tags('item', e => {
    
    let tag = 'minecraft:planks'
    let items = [
        'aether:skyroot_planks'
    ]
    items.forEach(item => {
        e.add(tag, item)
    })
    console.log(`applied all changes successfully!`);
})