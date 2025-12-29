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
                M: material
            }
        )
    }
    registerChimneyOf('#c:stones',                  'stone')
    registerChimneyOf('#c:cobblestones',            'cobblestone')
    registerChimneyOf('#c:bricks',                  'small_brick')
    registerChimneyOf('#c:bricks/large',            'large_brick')
    registerChimneyOf('#c:glass_panes/colorless',   'glass')
})