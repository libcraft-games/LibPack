let file = "recipes/immersive_aircraft/gyrodyne.js";

let ia = 'immersive_aircraft'
let ie = 'immersiveengineering'
let gyrodyne = `${ia}:gyrodyne`

ServerEvents.recipes(e => {
    e.remove({output: gyrodyne});
    e.shaped(
        Item.of(gyrodyne),
        [
            ' P ',
            ' M ',
            'SHS'
        ],
        {
            P: `${ia}:propeller`,
            M: 'create:precision_mechanism',
            S: `${ie}:windmill_sail`,
            H: `${ia}:hull`
        }
    );

    console.log(`applied changes from ${file}`);
}); 