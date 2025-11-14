let file = "recipes/immersive_aircraft/hull.js";

let ia = 'immersive_aircraft'
let ie = 'immersiveengineering'
let hull = `${ia}:hull`

ServerEvents.recipes(e => {
    e.remove({output: hull});
    e.shaped(
        Item.of(hull),
        [
            'SSS',
            'PPP',
            'SSS'
        ],
        {
            S: `${ie}:treated_scaffold`,
            P: '#c:plates/aluminum'
        }
    );
    
    console.log(`applied changes from ${file}`);
}); 