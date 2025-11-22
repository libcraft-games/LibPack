ServerEvents.recipes(e => {
    let rp = 'redstonepen', mc = 'minecraft'
    let remote = `${rp}:remote`
    let button = '#minecraft:buttons'
    let nickel_ingot = '#c:ingots/nickel'
    let transmitter = 'create:transmitter'
    e.remove({output: remote})
    e.shaped(remote,
        [
            'BT',
            'BN'
        ],
        {
            B: button,
            T: transmitter,
            N: nickel_ingot
        }
    )
    console.log(`applied all changes successfully!`);
});