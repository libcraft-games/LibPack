ServerEvents.recipes(e => {
    let cf = 'createfood'
    let ed = 'expandeddelight'
    let mc = 'minecraft'
    let item = `${ed}:cranberry_jelly`
    e.remove({ output: item, type: fd_cooking})
    AddFarmersDelightCookingRecipe(e,
        [
            `${ed}:cranberries`,
            '#c:sugar'
        ],
        `${mc}:glass_bottle`,
        item,
        0.35,
        'misc'
    )
})