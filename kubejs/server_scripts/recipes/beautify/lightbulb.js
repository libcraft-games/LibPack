let file = "recipes/beautify/lightbulb.js";

let ie = 'immersiveengineering';
let ie_light_bulb = `${ie}:light_bulb`;
let beautify = 'beautify';
let beautify_light_bulb = `${beautify}:lamp_light_bulb`;
let bamboo_lamp = `${beautify}:lamp_bamboo`;

let c_strings = '#c:strings';
let bamboo = 'minecraft:bamboo';
let lever = 'minecraft:lever';
let iron_nugget = '#c:nuggets/iron';

ServerEvents.recipes(e => {
    e.remove({output: beautify_light_bulb});
    e.shaped(
        Item.of(beautify_light_bulb),
        [
            ' B ',
            'ILI'
        ],
        {
            B: ie_light_bulb,
            I: iron_nugget,
            L: lever
        }
    );

    e.remove({output: 'beautify:lamp_bamboo'});
    e.shaped(
        Item.of('beautify:lamp_bamboo'),
        [
            ' S ',
            'BLB'
        ],
        {
            S: c_strings,
            B: bamboo,
            L: beautify_light_bulb
        }
    );
    e.shaped(
        Item.of('beautify:lamp_bamboo'),
        [
            ' S ',
            'BLB',
            'IVI'
        ],
        {
            S: c_strings,
            B: bamboo,
            L: ie_light_bulb,
            I: iron_nugget,
            V: lever
        }
    )

    console.log(`applied changes from ${file}`);
});