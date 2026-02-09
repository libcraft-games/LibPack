ServerEvents.recipes(e => {
    let cf = 'createfood'
    let ed = 'expandeddelight'
    let mc = 'minecraft'
    let item = `${ed}:asparagus_frittata`
    e.remove({ output: item, type: fd_cooking})
    AddFarmersDelightCookingRecipe(e,
        [
            '#c:eggs',
            '#c:eggs',
            '#c:crops/asparagus',
            '#c:foods/cheese',
            '#c:dusts/salt'
        ],
        `${mc}:bowl`,
        `${ed}:asparagus_frittata`,
        1.2,
        'meals'
    )
})