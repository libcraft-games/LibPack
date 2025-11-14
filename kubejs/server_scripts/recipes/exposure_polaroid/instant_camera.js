let file = "recipes/exposure_polaroid/instant_camera.js";

let ie = 'immersiveengineering'
let polaroid = 'exposure_polaroid:instant_camera'

ServerEvents.recipes(e => {
    e.remove({output: polaroid});
    e.shaped(
        Item.of(polaroid),
        [
            ' D ',
            'BPF',
            'DLD'
        ],
        {
            D: `${ie}:plate_duroplast`,
            B: '#minecraft:buttons',
            P: '#c:glass_panes/colorless',
            F: `${ie}:toolupgrade_shield_flash`,
            L: 'exposure:lightroom'
        }
    );

    console.log(`applied changes from ${file}`);
});