

let ia = 'immersive_aircraft'
let ie = 'immersiveengineering'
let bomb_bay = `${ia}:bomb_bay`

ServerEvents.recipes(e => {
    e.remove({output: bomb_bay});
    e.shaped(
        Item.of(bomb_bay),
        [
            'AHA'
        ],
        {
            A: '#c:plates/aluminum',
            H: `${ie}:hatch`
        }
    );

    console.log(`applied all changes successfully!`);
}); 