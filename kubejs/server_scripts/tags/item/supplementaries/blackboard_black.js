ServerEvents.tags('item', e => {    
    let tag = 'supplementaries:blackboard_black'
    let ie = 'immersiveengineering', ug = 'undergarden'
    let items = [
        `${ie}:coal_coke`,
        `${ug}:ditchbulb_paste`
    ]
    items.forEach(item => {
        e.remove(tag, item)
    })
    console.log(`applied all changes successfully!`);
})