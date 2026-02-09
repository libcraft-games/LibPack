ServerEvents.recipes(e => {
    let tag = '#c:cheeses'
    e.replaceInput(
        {input: tag},
        tag,
        '#c:foods/cheese'
    )
})