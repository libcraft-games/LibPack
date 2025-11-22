ServerEvents.recipes(e => {
    let rp = 'redstonepen', mc = 'minecraft'
    let item = `${rp}:pen`
    let nickel_nugget = '#c:nuggets/nickel'
    let redstone_block = '#c:storage_blocks/redstone'
    let nickel_ingot = '#c:ingots/nickel'
    e.remove({output: item})
    e.shaped(item,
        [
            '  I',
            ' B ',
            'N  '
        ],
        {
            I: nickel_ingot,
            B: redstone_block,
            N: nickel_nugget
        }
    )
    console.log(`applied all changes successfully!`);
});