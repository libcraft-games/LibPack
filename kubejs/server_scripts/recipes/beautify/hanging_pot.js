let file = "recipes/beautify/hanging_pot.js";

let hanging_pot = 'beautify:hanging_pot'

ServerEvents.recipes(e => {
    e.remove({output: hanging_pot});
    e.shaped(
        Item.of(beautify_light_bulb),
        [
            'R',
            'P'
        ],
        {
            R: '#c:ropes',
            P: 'minecraft:flower_pot'
        }
    );
    console.log(`applied changes from ${file}`);
});