ServerEvents.recipes(e => {
    let sb = 'sophisticatedbackpacks'
    let item = `${sb}:tool_swapper_upgrade`
    

    let upgrade_base = `${sb}:upgrade_base`

    e.remove({output: item})
    e.shaped(
        item,
        [
            ' A ',
            'DUB',
            ' C '
        ], 
        {
            U: upgrade_base,
            A: '#create:toolboxes',
            B: `${ie}:pickaxe_steel`,
            C: Ingredient.of('luckysshowcase:tool_rack')
                         .or('#bibliocraft:tool_racks'),
            D: `${ie}:axe_steel`
        }
    )

    console.log(`applied all changes successfully!`);
});