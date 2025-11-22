ServerEvents.recipes(e => {
    let adc = 'adchimneys'
    function registerVentOf(material, ct, result) {
        let vent = `${adc}:${result}_vent`
        e.remove({output: vent})
        e.shaped(
            `${ct}x ${vent}`,
            [
                'MMM',
                'BBB',
                'MMM',
            ],
            {
                M: material,
                B: 'minecraft:iron_bars'
            }
        )
    }
    registerVentOf('minecraft:cobblestone', 2, 'stone')
    registerVentOf('create:industrial_iron_block', 2, 'metal')
    console.log(`applied all changes successfully!`);
});