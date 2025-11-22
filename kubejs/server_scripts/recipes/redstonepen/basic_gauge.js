ServerEvents.recipes(e => {
    let rp = 'redstonepen', mc = 'minecraft'
    let item = `${rp}:basic_gauge`
    let rose_quartz = 'create:polished_rose_quartz'
    let nickel_ingot = '#c:ingots/nickel'
    let redstone_dust = '#c:dusts/redstone'
    let tinted_glass = `${mc}:tinted_glass`
    e.remove({output: item})
    e.shaped(item,
        [
            'DQD',
            'GDG',
            'DND'
        ],
        {
            D: redstone_dust,
            Q: rose_quartz,
            N: nickel_ingot,
            G: tinted_glass
        }
    )
    console.log(`applied all changes successfully!`);
});