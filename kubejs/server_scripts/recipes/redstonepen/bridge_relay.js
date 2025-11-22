ServerEvents.recipes(e => {
    let rp = 'redstonepen', mc = 'minecraft'
    let relay = `${rp}:relay`, bridge_relay = `${rp}:bridge_relay`
    let stone = `${mc}:stone`, 
        redstone_dust = '#c:dusts/redstone', 
        redstone_torch = `${mc}:redstone_torch`, 
        quartz = '#c:gems/quartz', 
        lever = `${mc}:lever`, 
        stick = '#c:rods/wooden'
    e.remove({output: bridge_relay})
    e.shaped(bridge_relay,
        [
            ' R ',
            'WTW',
            ' S '
        ],
        {
            R: redstone_dust,
            W: stick,
            S: stone,
            T: redstone_torch
        }
    )
    e.shapeless(bridge_relay,
        [relay, `2x ${stick}`]
    )
    console.log(`applied all changes successfully!`);
});