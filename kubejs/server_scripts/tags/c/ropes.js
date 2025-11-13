let file = 'tags/c/ropes.js'
// note: these items are not unified (e.g. with Almost Unified) as they have different behaviors when placed
ServerEvents.tags('item', e => {
    e.add('c:ropes', 'beautify:rope')
    e.add('c:ropes', 'immersiveengineering:wirecoil_structure_rope')
    console.log(`applied changes from ${file}`);
})