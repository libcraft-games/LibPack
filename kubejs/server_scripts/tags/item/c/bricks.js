ServerEvents.tags('item', e => {
    let s = 'supplementaries'
    let c_bricks = 'c:bricks'
    let ash_brick = `${s}:ash_brick`, ash_bricks = `${s}:ash_bricks`
    e.add(c_bricks, ash_brick)
    e.remove(c_bricks, ash_bricks)
    console.log(`applied all changes successfully!`);
})