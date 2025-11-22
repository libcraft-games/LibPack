ServerEvents.recipes(e => {
    let rp = 'redstonepen', mc = 'minecraft'
    let relay = `${rp}:relay`, basic_button = `${rp}:basic_button`, basic_pulse_button = `${rp}:basic_pulse_button`, pulse_relay = `${rp}:pulse_relay`
    let stone = `${mc}:stone`, 
        redstone_dust = '#c:dusts/redstone', 
        redstone_torch = `${mc}:redstone_torch`, 
        quartz = '#c:gems/quartz', 
        lever = `${mc}:lever`, 
        stick = '#c:rods/wooden',
        nickel_nugget = '#c:nuggets/nickel',
        button = '#minecraft:buttons'
    e.remove({output: basic_pulse_button})
    e.shapeless(basic_pulse_button,
        [basic_button, pulse_relay]
    )
    e.shapeless(basic_pulse_button,
        [button, redstone_torch, quartz, nickel_nugget]
    )
    console.log(`applied all changes successfully!`);
});