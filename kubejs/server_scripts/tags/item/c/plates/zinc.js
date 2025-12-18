ServerEvents.tags('item', e => {    
    let tag = 'c:plates/zinc'
    e.remove(tag, 'createdeco:zinc_sheet')
    console.log(`applied all changes successfully!`);
})