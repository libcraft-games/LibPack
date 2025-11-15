

let ia = 'immersive_aircraft'
let ie = 'immersiveengineering'
let engine = `${ia}:engine`

ServerEvents.recipes(e => {
    e.remove({output: engine});
    e.shaped(
        Item.of(engine),
        [
            ' I ',
            'PCP',
            'IBI'
        ],
        {
            I: '#c:plates/iron',
            P: 'minecraft:piston',
            C: `${ie}:component_iron`,
            B: `${ie}:metal_barrel`
        }
    );

    console.log(`applied all changes successfully!`);
}); 