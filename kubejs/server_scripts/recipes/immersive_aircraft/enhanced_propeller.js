

let ia = 'immersive_aircraft'
let ie = 'immersiveengineering'
let enhanced_propeller = `${ia}:enhanced_propeller`

ServerEvents.recipes(e => {
    e.remove({output: enhanced_propeller});
    e.shaped(
        Item.of(enhanced_propeller),
        [
            'P P',
            ' M ',
            'P P'
        ],
        {
            P: '#c:plates/aluminum',
            M: 'create:precision_mechanism'
        }
    );

    console.log(`applied all changes successfully!`);
}); 