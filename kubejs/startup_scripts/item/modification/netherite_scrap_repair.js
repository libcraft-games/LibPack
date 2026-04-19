ItemEvents.modification(e => {
    let mc = 'minecraft'
    let items = {
        aether: [ 'gloves' ],
        create: [
            'diving_helmet',
            'diving_boots'
        ],
        basicweapons: [
            'dagger',
            'hammer',
            'club',
            'spear',
            'quarterstaff',
            'glaive'
        ],
        farmersdelight: [ 'knife' ],
        minecraft: [
            'shovel',
            'pickaxe',
            'axe',
            'hoe',
            'sword',
            'helmet',
            'chestplate',
            'leggings',
            'boots'
        ],
        simplest_excavators: [ 'excavator' ],
        simplest_hammers: [ 'hammer' ]
    }
    e.modify(`${mc}:netherite_pickaxe`, item => {
        for(let [namespace, items] in items) {
            for(let item of items) {
                let itemid = `${namespace}:netherite_${item}`
                item.tier = tier => { tier.repairIngredient = `${mc}:netherite_scrap` }
            }
        }
    })
})