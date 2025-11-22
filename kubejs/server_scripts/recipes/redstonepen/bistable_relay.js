ServerEvents.recipes(e => {
    let rp = 'redstonepen', mc = 'minecraft'
    let relay = `${rp}:relay`, bistable_relay = `${rp}:bistable_relay`
    let stone = `${mc}:stone`, redstone_dust = '#c:dusts/redstone', redstone_torch = `${mc}:redstone_torch`, quartz = '#c:gems/quartz', lever = `${mc}:lever`
    e.remove({output: bistable_relay})
    e.shaped(bistable_relay,
        [
            ' Q',
            'LT',
            ' S'
        ],
        {
            L: lever,
            Q: quartz,
            T: redstone_torch,
            S: stone
        }
    )
    e.shapeless(bistable_relay,
        [lever, relay]
    )
    console.log(`applied all changes successfully!`);
});