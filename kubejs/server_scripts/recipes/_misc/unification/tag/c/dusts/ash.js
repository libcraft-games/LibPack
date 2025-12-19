ServerEvents.recipes(e => {
    let item = 'supplementaries:ash'
    e.replaceInput(
        {input: item},
        item,
        '#c:dusts/ash'
    )
})