ServerEvents.recipes(e => {
    let sb = 'sophisticatedbackpacks'
    let item = `${sb}:advanced_void_upgrade`
    

    e.remove({output: item})
    e.shaped(
        item,
        [
            'GPG',
            'SUS',
            'GPG'
        ], 
        {
            G: '#c:plates/gold',
            P: '#c:ender_pearls',
            U: `${sb}:compacting_upgrade`,
            S: 'enderscape:void_shale'
        }
    )

    console.log(`applied all changes successfully!`);
});