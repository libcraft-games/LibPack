ServerEvents.recipes(e => {
    let sb = 'sophisticatedbackpacks'
    // List<(string tierName, string centerItem, string surroundingItem)>
    let upgrades = [
        ['starter_tier', 'upgrade_base',                '#c:storage_blocks/copper'],
        ['tier_1',       'stack_upgrade_starter_tier',  '#c:storage_blocks/iron'],
        ['tier_2',       'stack_upgrade_tier_1',        '#c:storage_blocks/gold'],
        ['tier_3',       'stack_upgrade_tier_2',        '#c:storage_blocks/diamond'],
        ['tier_4',       'stack_upgrade_tier_3',        '#c:storage_blocks/netherite'],
        ['omega_tier',   'stack_upgrade_tier_4',        `${sb}:stack_upgrade_tier_4`],
    ]
    for(let [tier, upgradeFrom, outside] of upgrades) {
        let result = `${sb}:stack_upgrade_${tier}`
        let center = `${sb}:${upgradeFrom}`
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