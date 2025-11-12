let file = "recipes/createaddition/modular_accumulator.js";

let ie = 'immersiveengineering';
let modular_accumulator = 'createaddition:modular_accumulator';

ServerEvents.recipes(e => {
    e.remove({output: modular_accumulator});
    // Create mechanical crafting recipes are just normal crafting recipes which don't fit in a 3x3 square
    e.shaped(
        Item.of(modular_accumulator),
        [
            ' ABA ',
            'ACDCA',
            'EFGHI',
            'ACJCA',
            ' AKA '
        ],
        {
            A: '#c:plates/brass',
            B: 'create:factory_gauge',
            C: `${ie}:duroplast`,
            D: `${ie}:current_transformer`,
            E: `${ie}:connector_lv`,
            F: `${ie}:transformer`,
            G: 'create:brass_casing',
            H: `${ie}:transformer_hv`,
            I: `${ie}:connector_hv`,
            J: `${ie}:capacitor_hv`,
            K: `${ie}:connector_mv`
        }
    );

    console.log(`applied changes from ${file}`);
});