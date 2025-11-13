let file = "recipes/immersive_aircraft/propeller.js";

let ia = 'immersive_aircraft'
let ie = 'immersiveengineering'
let propeller = `${ia}:propeller`

ServerEvents.recipes(e => {
    e.remove({output: propeller});
    e.shaped(
        Item.of(propeller),
        [
            'P  ',
            ' R ',
            '  P'
        ],
        {
            P: '#c:plates/iron',
            R: '#c:rods/iron'
        }
    );
    
    console.log(`applied changes from ${file}`);
}); 