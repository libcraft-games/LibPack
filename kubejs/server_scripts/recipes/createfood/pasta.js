

let raw_pasta = 'c:raw_pasta'; // `#` omitted as it is implied by the `tag:` field in the json
let pasta = 'createfood:pasta';
let fd_cooking = 'farmersdelight:cooking';

ServerEvents.recipes(e => {
    e.remove({ output: pasta, type: fd_cooking})
    // see original @ https://github.com/AverageAnime/create-food/blob/a65618ab854d168f1f5bc915a0e6f5688769a946/src/main/resources/data/createfood/recipes/farmersdelight/cooking/pasta_from_cooking.json#L16-L30
    e.custom({
        type: fd_cooking,
        cookingtime: 350,
        experience: 0.2,
        ingredients: [{tag: raw_pasta}],
        result: {id: pasta, count: 1}
    });

    console.log(`applied all changes successfully!`);
});