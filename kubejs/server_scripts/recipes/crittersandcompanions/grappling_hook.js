ServerEvents.recipes(e => {
    let file = 'recipes/crittersandcompanions/grappling_hook.js'
    let item = 'crittersandcompanions:grappling_hook'
    e.remove({output: item})
    e.shaped(item,
        [
            'CS ',
            'SB ',
            '  S'
        ],
        {
            S: 'crittersandcompanions:silk',
            C: 'minecraft:cobweb',
            B: 'crittersandcompanions:sea_bunny_slime_block'
        }
    )
    console.log(`applied changes from ${file}`);
});