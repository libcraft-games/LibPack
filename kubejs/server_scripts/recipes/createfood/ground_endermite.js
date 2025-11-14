let file = "recipes/createfood/ground_endermite.js";

let ground_endermite = 'createfood:ground_endermite';
let mite_crust = 'endersdelight:mite_crust';

ServerEvents.recipes(e => {
    e.shapeless(
        Item.of(ground_endermite),
        [
            mite_crust
        ]
    );
    e.custom({
        type: 'create:pressing',
        ingredients: [{item: mite_crust}],
        results: [{id: ground_endermite, count: 2}]
    });

    console.log(`applied changes from ${file}`);
});