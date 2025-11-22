ServerEvents.recipes(e => {
    let adc = 'adchimneys'
    function registerChimneyOf(material, result) {
        if(!result)
            result = material
        let chimney = `${adc}:${result}_chimney`
        e.remove({output: chimney})
        e.shaped(
            `4x ${chimney}`,
            [
                'M M',
                'M M',
                'M M',
            ],
            {
                M: `minecraft:${material}`
            }
        )
    }
    registerChimneyOf('stone')
    registerChimneyOf('cobblestone')
    registerChimneyOf('brick', 'small_brick')
    registerChimneyOf('stone_bricks', 'large_brick')
    registerChimneyOf('glass_pane', 'glass')
    console.log(`applied all changes successfully!`);
});