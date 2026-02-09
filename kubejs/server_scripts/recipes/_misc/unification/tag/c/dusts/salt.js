ServerEvents.recipes(e => {
    let item = 'createfood:salt'
    e.replaceInput(
        {input: item},
        item,
        '#c:dusts/salt'
    )
})