let file = "recipes/immersive_aircraft/steel_boiler.js";

let ia = 'immersive_aircraft'
let ie = 'immersiveengineering'
let steel_boiler = `${ia}:steel_boiler`

ServerEvents.recipes(e => {
    e.remove({output: steel_boiler});
    e.shaped(
        Item.of(steel_boiler),
        [
            'PPP',
            'P P',
            'PFP'
        ],
        {
            P: '#c:plates/steel',
            F: 'minecraft:blast_furnace'
        }
    );
    
    console.log(`applied changes from ${file}`);
}); 