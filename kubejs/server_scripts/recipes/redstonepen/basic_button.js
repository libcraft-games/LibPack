ServerEvents.recipes(e => {
    let rp = 'redstonepen', mc = 'minecraft'
    let relay = `${rp}:relay`, basic_button = `${rp}:basic_button`
    let stone = `${mc}:stone`, 
        redstone_dust = '#c:dusts/redstone', 
        redstone_torch = `${mc}:redstone_torch`, 
        quartz = '#c:gems/quartz', 
        lever = `${mc}:lever`, 
        stick = '#c:rods/wooden',
        nickel_nugget = '#c:nuggets/nickel',
        button = '#minecraft:buttons'
    e.remove({output: basic_button})
    e.shapeless(basic_button,
        [button, nickel_nugget]
    )
    console.log(`applied all changes successfully!`);
});