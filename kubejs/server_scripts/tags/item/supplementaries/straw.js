ServerEvents.tags('item', e => {
    let s = 'supplementaries', mc = 'minecraft'
    e.remove(`${s}:straw`, `${mc}:wheat`)
    console.log(`applied all changes successfully!`);
})