

let ia = 'immersive_aircraft'
let ie = 'immersiveengineering'
let industrial_gears = `${ia}:industrial_gears`

ServerEvents.recipes(e => {
    e.remove({output: industrial_gears});
    e.shaped(
        Item.of(industrial_gears),
        [
            ' CC',
            'ASC',
            'AA '
        ],
        {
            C: '#c:plates/constantan',
            A: '#c:plates/aluminum',
            S: 'create:shaft'
        }
    );
    
    console.log(`applied all changes successfully!`);
}); 