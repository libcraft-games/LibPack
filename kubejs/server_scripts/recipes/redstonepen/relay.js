ServerEvents.recipes(e => {
    let rp = 'redstonepen', mc = 'minecraft'
    let relay = `${rp}:relay`, inverted_relay = `${rp}:inverted_relay`
    let stone = `${mc}:stone`, redstone_dust = '#c:dusts/redstone', redstone_torch = `${mc}:redstone_torch`
    e.remove({output: relay})
    e.shaped(relay,
        [
            'D',
            'T',
            'S'
        ],
        {
            D: redstone_dust,
            T: redstone_torch,
            S: stone
        }
    )
    e.shapeless(
        relay,
        [inverted_relay]
    )
    console.log(`applied all changes successfully!`);
});