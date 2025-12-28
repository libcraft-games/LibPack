ServerEvents.recipes(e => {
    let sb = 'sophisticatedbackpacks', ss = 'sophisticatedstorage'

    function replaceUpgradeBase(e, item, material1, material2) {
        e.remove({output: item})
        e.shaped(`2x ${item}`,
            [
                'ABA',
                'IRI',
                'ABA'
            ],
            {
                A: material1,
                B: material2,
                I: '#c:ingots/iron',
                R: '#c:dusts/redstone'
            }
        )
    }

    replaceUpgradeBase(e, `${sb}:upgrade_base`, '#c:strings', '#c:leathers')
    replaceUpgradeBase(e, `${ss}:upgrade_base`, '#minecraft:planks', '#c:stripped_logs')
})