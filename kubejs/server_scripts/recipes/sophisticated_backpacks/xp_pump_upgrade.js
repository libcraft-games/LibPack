ServerEvents.recipes(e => {
    let sb = 'sophisticatedbackpacks'
    let item = `${sb}:xp_pump_upgrade`
    
    let ee = 'create_enchantment_industry'

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
            U: `${sb}:advanced_pump_upgrade`,
            A: `${ee}:experience_lantern`,
            B: 'create:experience_block',
            C: `${ee}:experience_hatch`
        }
    )
    console.log(`applied all changes successfully!`);
});