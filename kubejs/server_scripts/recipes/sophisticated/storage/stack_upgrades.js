ServerEvents.recipes(e => {
    let ss = 'sophisticatedstorage'
    // List<(string tierName, string centerItem, string surroundingItem)>
    let upgrades = [
        ['tier_1',       'upgrade_base',                '#minecraft:logs'],
        ['tier_1_plus',  'stack_upgrade_tier_1',        '#c:ingots/copper'],
        ['tier_2',       'stack_upgrade_tier_1_plus',   '#c:ingots/iron'],
        ['tier_3',       'stack_upgrade_tier_2',        '#c:ingots/gold'],
        ['tier_4',       'stack_upgrade_tier_3',        '#c:gems/diamond'],
        ['tier_5',       'stack_upgrade_tier_4',        '#c:ingots/netherite'],
        ['omega_tier',   'stack_upgrade_tier_5',        `${ss}:stack_upgrade_tier_5`],
    ]
    for(let [tier, upgradeFrom, outside] of upgrades) {
        let result = `${ss}:stack_upgrade_${tier}`
        let center = `${ss}:${upgradeFrom}`
        e.remove({output: result})
        e.shaped(result,
            [
                'OOO',
                'OCO',
                'OOO'
            ],
            {
                O: outside,
                C: center
            }
        )
    }

    console.log(`applied all changes successfully!`)
})