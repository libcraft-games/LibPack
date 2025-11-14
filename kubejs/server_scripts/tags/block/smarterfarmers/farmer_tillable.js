let file = 'tags/blocks/smarterfarmers/farmer_tillable/tillable.js'
ServerEvents.tags('block', e => {
    e.add('smarterfarmers:farmer_tillable', 'minecraft:dirt')
    console.log(`applied changes from ${file}`);
})