

let ia = 'immersive_aircraft'
let ie = 'immersiveengineering'
let warship = `${ia}:warship`

ServerEvents.recipes(e => {
    e.remove({output: warship});
    e.shaped(
        Item.of(warship),
        [
            'CSC',
            'EAE',
            'PGH'
        ],
        {
            C: `${ie}:cushion`,
            S: `${ie}:windmill_sail`,
            E: `${ia}:engine`,
            A: `${ia}:cargo_airship`,
            P: '#c:plates/steel',
            G: '#c:glass_panes/colorless',
            H: `${ia}:heavy_crossbow`
        }
    );
    
    console.log(`applied all changes successfully!`);
}); 