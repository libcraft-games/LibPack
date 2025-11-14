let file = "recipes/immersive_aircraft/airship.js";

let ia = 'immersive_aircraft'
let ie = 'immersiveengineering'
let airship = `${ia}:airship`

ServerEvents.recipes(e => {
    e.remove({output: airship});
    e.shaped(
        Item.of(airship),
        [
            'WCW',
            'CRC',
            'PEB'
        ],
        {
            W: `${ie}:windmill_sail`,
            C: `${ie}:cushion`,
            R: '#c:ropes',
            P: `${ia}:propeller`,
            E: `${ia}:engine`,
            B: '#minecraft:boats'
        }
    );

    console.log(`applied changes from ${file}`);
}); 