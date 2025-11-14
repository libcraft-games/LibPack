ServerEvents.recipes(e => {
    let file = 'recipes/crittersandcompanions/string.js'
    e.remove({input: 'crittersandcompanions:silk', output: 'minecraft:string'})
    console.log(`applied changes from ${file}`);
});