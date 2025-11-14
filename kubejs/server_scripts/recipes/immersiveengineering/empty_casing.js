let file = "recipes/immersiveengineering/empty_casing.js";

let ie = 'immersiveengineering'
let empty_casing = `${ie}:empty_casing`

ServerEvents.recipes(e => {
    // TODO: ensure this removes both the crafting table and metal press recipes
    e.remove({output: empty_casing});
    e.custom({
        type: `${ie}:blueprint`,
        category: 'bullet',
        inputs: [{tag: 'c:plates/brass'}],
        result: {
            id: empty_casing,
            count: 3
        }
    })
    e.custom({
        type: `${ie}:metal_press`,
        energy: 2400,
        mold: `${ie}:mold_bullet_casing`,
        input: {tag: 'c:plates/brass'},
        result: {
            id: empty_casing,
            count: 4
        }
    })
    console.log(`applied changes from ${file}`);
}); 