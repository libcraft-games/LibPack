ServerEvents.recipes(e => {
    let rp = 'redstonepen', mc = 'minecraft'
    let relay = `${rp}:relay`, inverted_relay = `${rp}:inverted_relay`
    let stone = `${mc}:stone`, redstone_dust = '#c:dusts/redstone', redstone_torch = `${mc}:redstone_torch`
    e.remove({output: inverted_relay})
    e.shaped(inverted_relay,
        [
            'T',
            'D',
            'S'
        ],
        {
            D: redstone_dust,
            T: redstone_torch,
            S: stone
        }
    )
    e.shapeless(
        inverted_relay,
        [relay]
    )
    console.log(`applied all changes successfully!`);
});