// Ash Bricks from wood ash
// soap crafting:
// - ash + quicklime + pork + water
// - ash + quicklime + seed oil/plant oil/vegetable oil
ServerEvents.recipes(ev => {
    let s = 'supplementaries', e = 'enchanted'
    let ash = `${s}:ash`, 
        wood_ash = `${e}:wood_ash`,
        ash_brick = `${s}:ash_brick`

    // remove ash bricks recipe
    ev.remove({output: ash_brick})
    ev.smelting(
        ash_brick,
        wood_ash
    )

    console.log(`applied all changes successfully!`);
});