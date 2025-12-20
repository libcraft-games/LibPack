ServerEvents.recipes(e => {    
    e.replaceInput(
        {input: 'minecraft:leather'},
        'minecraft:leather',
        '#c:leathers'
    )
    console.log(`applied all changes successfully!`);
});