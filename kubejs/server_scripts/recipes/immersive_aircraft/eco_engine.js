

let ia = 'immersive_aircraft'
let ie = 'immersiveengineering'
let eco_engine = `${ia}:eco_engine`

ServerEvents.recipes(e => {
    e.remove({output: eco_engine});
    e.shaped(
        Item.of(eco_engine),
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            A: 'create:sturdy_sheet',
            B: 'undergarden:forgotten_nugget',
            C: 'twilightforest:steeleaf_ingot',
            D: `${ia}:engine`,
            E: '#c:plates/uranium',
            F: 'minecraft:calibrated_sculk_sensor'
        }
    );

    console.log(`applied all changes successfully!`);
}); 