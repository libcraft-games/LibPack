ServerEvents.recipes(e => {
    let rp = 'redstonepen', mc = 'minecraft'
    let relay = `${rp}:relay`, pulse_relay = `${rp}:pulse_relay`
    let stone = `${mc}:stone`, redstone_dust = '#c:dusts/redstone', redstone_torch = `${mc}:redstone_torch`, quartz = '#c:gems/quartz'
    e.remove({output: pulse_relay})
    e.shaped(pulse_relay,
        [
            'Q',
            'T',
            'S'
        ],
        {
            Q: quartz,
            T: redstone_torch,
            S: stone
        }
    )
    console.log(`applied all changes successfully!`);
});