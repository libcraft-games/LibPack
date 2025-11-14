ServerEvents.tags('item', e => {
    let file = 'tags/item/minecraft/planks.js'
    let tag = 'minecraft:planks'
    let items = [
        'aether:skyroot_planks'
    ]
    items.forEach(item => {
        e.add(tag, item)
    })
    console.log(`applied changes from ${file}`);
})