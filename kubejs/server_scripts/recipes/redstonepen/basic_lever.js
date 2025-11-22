ServerEvents.recipes(e => {
    let rp = 'redstonepen', mc = 'minecraft'
    let relay = `${rp}:relay`, basic_lever = `${rp}:basic_lever`
    let stone = `${mc}:stone`, 
        redstone_dust = '#c:dusts/redstone', 
        redstone_torch = `${mc}:redstone_torch`, 
        quartz = '#c:gems/quartz', 
        lever = `${mc}:lever`, 
        stick = '#c:rods/wooden',
        nickel_nugget = '#c:nuggets/nickel'
    e.remove({output: basic_lever})
    e.shapeless(basic_lever,
        [lever, nickel_nugget]
    )
    console.log(`applied all changes successfully!`);
});