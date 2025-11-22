ServerEvents.tags('item', e => {
    let s = 'supplementaries'
    let tag = `${s}:throwable_bricks`
    let ash_bricks = `${s}:ash_bricks`
    e.remove(tag, ash_bricks)
    console.log(`applied all changes successfully!`);
})