// many mods use the `#c:chests` tag, but pretty clearly expect only wooden chests, however ender
// chests are wildly more expensive than the rest. somehow ender chests are the *icon* for the
// tag, too, so at a glance these recipes are misleading.
// previously, i removed the tag from ender chests, but a better solution is to fix the recipes -
// there's already a `#c:chests/wooden` tag which is more along the lines of what mods are expecting.
// while i'm at it, also replaces recipes which only accept vanilla chests with the same tag, except
// recipes which produce another `#c:chests/wooden` item.
ServerEvents.recipes(e => {
    
    e.replaceInput(
        {input: '#c:chests'},
        '#c:chests',
        '#c:chests/wooden'
    )
    e.replaceInput(
        {input: 'minecraft:chest', not: {output: "#c:chests/wooden"}},
        'minecraft:chest',
        '#c:chests/wooden'
    )
    console.log(`applied all changes successfully!`);
});