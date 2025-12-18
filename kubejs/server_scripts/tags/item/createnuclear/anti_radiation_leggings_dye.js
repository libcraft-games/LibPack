ServerEvents.tags('item', e => {
    let cn = 'createnuclear'
    let itemType = 'leggings'
    let tag = `${cn}:anti_radiation_${itemType}_dye`
    let item = `${cn}:white_anti_radiation_${itemType}`
    e.add(tag, item)
    console.log(`applied all changes successfully!`)
})