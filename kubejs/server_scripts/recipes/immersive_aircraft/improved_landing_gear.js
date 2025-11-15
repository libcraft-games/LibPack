

let ia = 'immersive_aircraft'
let ie = 'immersiveengineering'
let improved_landing_gear = `${ia}:improved_landing_gear`

ServerEvents.recipes(e => {
    e.remove({output: improved_landing_gear});
    e.shaped(
        Item.of(improved_landing_gear),
        [
            'CLW',
            'LSL',
            'CLC'
        ],
        {
            C: `${ie}:dust_coke`,
            L: `${ie}:ersatz_leather`,
            W: `${ie}:treated_wallmount`,
            S: 'create:shaft'
        }
    );
    
    console.log(`applied all changes successfully!`);
}); 