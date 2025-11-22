ServerEvents.recipes(e => {
    let rp = 'redstonepen', mc = 'minecraft', ie = 'immersiveengineering'
    let item = `${rp}:control_box`
    let stone = `${mc}:stone`
    let comparator = `${mc}:comparator`
    let vacuum_tube = `${ie}:electron_tube`
    e.remove({output: item})
    e.shaped(item,
        [
            'VCV',
            'CSC',
            'VCV'
        ],
        {
            V: vacuum_tube,
            C: comparator,
            S: stone
        }
    )
    console.log(`applied all changes successfully!`);
});