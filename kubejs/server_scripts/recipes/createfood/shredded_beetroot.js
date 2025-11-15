ServerEvents.recipes(e => {
    
    e.remove({
        type: 'minecraft:crafting_shapeless',
        output: 'createfood:shredded_beetroot'
    })

    console.log(`applied all changes successfully!`);
});