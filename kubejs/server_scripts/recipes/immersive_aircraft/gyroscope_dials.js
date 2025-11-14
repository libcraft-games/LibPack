let file = "recipes/immersive_aircraft/gyroscope_dials.js";

let ia = 'immersive_aircraft'
let ie = 'immersiveengineering'
let gyroscope_dials = `${ia}:gyroscope_dials`

ServerEvents.recipes(e => {
    e.remove({output: gyroscope_dials});
    e.shaped(
        Item.of(gyroscope_dials),
        [
            ' AM',
            'NGL'
        ],
        {
            A: 'supplementaries:altimeter',
            M: 'create:precision_mechanism',
            N: 'minecraft:note_block',
            G: `${ia}:gyroscope`,
            L: 'minecraft:lever'
        }
    );

    console.log(`applied changes from ${file}`);
}); 