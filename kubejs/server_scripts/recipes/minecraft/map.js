ServerEvents.recipes(e => {
    let map = 'minecraft:map', compass = 'minecraft:compass'
    e.remove({input: compass, output: map});
    e.shaped(
        Item.of(map),
        [
            'PPP',
            'PCP',
            'PPP'
        ],
        {
            C: compass,
            P: 'minecraft:paper'
        }
    ).keepIngredient(compass)
})