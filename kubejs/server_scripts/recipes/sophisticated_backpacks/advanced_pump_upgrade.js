ServerEvents.recipes(e => {
    let sb = 'sophisticatedbackpacks'
    let item = `${sb}:advanced_pump_upgrade`
    
    let bound = 'scriptor:bound_'

    e.remove({output: item})
    e.shaped(
        item,
        [
            'GAG',
            'BUB',
            'GCG'
        ], 
        {
            G: '#c:plates/gold',
            U: `${sb}:pump_upgrade`,
            A: `${ie}:fluid_sorter`,
            B: 'create:mechanical_pump',
            C: 'create:hose_pulley'
        }
    )
    console.log(`applied all changes successfully!`);
});