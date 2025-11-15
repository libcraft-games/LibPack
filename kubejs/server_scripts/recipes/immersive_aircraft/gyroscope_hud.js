

let ia = 'immersive_aircraft'
let ie = 'immersiveengineering'
let gyroscope_dials = `${ia}:gyroscope_dials`
let glass_pane = '#c:glass_panes/colorless'
let nixie_tube = 'create:nixie_tube'
let electrum_plate = '#c:plates/electrum'
let electronic_component = `${ie}:component_electronic_adv`

ServerEvents.recipes(e => {
    e.remove({output: gyroscope_dials});
    e.shaped(
        Item.of(gyroscope_dials),
        [
            ' PT',
            'ECE',
            'NGA'
        ],
        {
            P: glass_pane,
            T: nixie_tube,
            E: electrum_plate,
            C: electronic_component,
            N: 'minecraft:note_block',
            G: `${ia}:gyroscope`,
            A: 'supplementaries:altimeter'
        }
    );

    console.log(`applied all changes successfully!`);
}); 