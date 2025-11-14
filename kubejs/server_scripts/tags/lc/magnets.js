let file = 'tags/lc/magnets.js'
ServerEvents.tags('item', e => {
    let tag = 'lc:magnets/portable'
    let items = [
        'twilightforest:ore_magnet',
        'artifacts:universal_attractor',
        'immersiveengineering:toolupgrade_powerpack_magnet'
    ]
    items.forEach(item => {
        e.add(tag, item)
    })
    console.log(`applied changes from ${file}`);
})