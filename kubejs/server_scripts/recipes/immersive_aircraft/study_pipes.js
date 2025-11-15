

let ia = 'immersive_aircraft'
let ie = 'immersiveengineering'
let sturdy_pipes = `${ia}:sturdy_pipes`

ServerEvents.recipes(e => {
    e.remove({output: sturdy_pipes});
    e.shaped(
        Item.of(sturdy_pipes),
        [
            '  P',
            'SPS',
            'P  '
        ],
        {
            S: '#c:plates/steel',
            P: 'create:fluid_pipe'
        }
    );
    
    console.log(`applied all changes successfully!`);
}); 