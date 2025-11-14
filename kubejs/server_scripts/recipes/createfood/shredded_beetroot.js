ServerEvents.recipes(e => {
    let file = "recipes/createfood_shredded_beetroot.js";
    e.remove({
        type: 'minecraft:crafting_shapeless',
        output: 'createfood:shredded_beetroot'
    })

    console.log(`applied changes from ${file}`);
});