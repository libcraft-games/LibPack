LootJS.lootTables(e => {
    let a = 'artifacts'
    let ew = 'enchanted'
    let ii = 'illagerinvasion'
    let mc = 'minecraft'
    let tf = 'twilightforest'
    let table = e.getLootTable(`${mc}:chests/illager_mansion/witch_chest`)

    function ominous_bottle(level) {
        let result = LootEntry.of(`${mc}:ominous_bottle`).withWeight(6 - level)
        if(level > 1) {
            result = result.jsonFunction({
                function: `${mc}:set_components`,
                components: {
                    ominous_bottle_amplifier: level - 1
                }
            })
        }
        return result
    }

    table.clear()
    table.createPool(pool => {
        pool.rolls([1, 3])
        for(let i = 1; i <= 5; i++)
            pool.addEntry(ominous_bottle(i))
    })
    table.createPool(pool => {
        pool.rolls([3, 5])
        pool.addEntry(LootEntry.of(`${mc}:potion`).withWeight(7).addPotion(`${mc}:water`))
        pool.addEntry(LootEntry.of(`${mc}:potion`).withWeight(5).addPotion(`${mc}:awkward`))
        pool.addEntry(LootEntry.of(`${mc}:potion`).withWeight(5).addPotion(`${mc}:healing`))
        pool.addEntry(LootEntry.of(`${mc}:potion`).withWeight(3).addPotion(`${mc}:strength`))
        pool.addEntry(LootEntry.of(`${mc}:potion`).withWeight(3).addPotion(`${mc}:leaping`))
        pool.addEntry(LootEntry.of(`${mc}:splash_potion`).withWeight(3).addPotion(`${mc}:slowness`))
        pool.addEntry(LootEntry.of(`${mc}:splash_potion`).withWeight(3).addPotion(`${mc}:poison`))
        pool.addEntry(LootEntry.of(`${mc}:splash_potion`).withWeight(2).addPotion(`${mc}:harming`))
        pool.addEntry(LootEntry.of(`${mc}:splash_potion`).withWeight(2).addPotion(`${mc}:weakness`))
        pool.addEntry(LootEntry.of(`${mc}:potion`).withWeight(1).addPotion(`${ii}:berserking`))
    })
    table.createPool(pool => {
        pool.rolls([2, 3])
        pool.addEntry(LootEntry.of(`${ew}:belladonna_flower`, [3, 5]).withWeight(7))
        pool.addEntry(LootEntry.of(`${mc}:nether_wart`, [1, 3]).withWeight(6))
        pool.addEntry(LootEntry.of(`${mc}:spider_eye`, [2, 5]).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:gunpowder`, [2, 4]).withWeight(5))
        pool.addEntry(LootEntry.of(`${mc}:glistering_melon_slice`, [1, 2]).withWeight(4))
        pool.addEntry(LootEntry.of(`${mc}:fermented_spider_eye`, [1, 2]).withWeight(3))
        pool.addEntry(LootEntry.of(`${mc}:rabbit_foot`, [1, 3]).withWeight(2))
        pool.addEntry(LootEntry.of(`${ew}:tongue_of_dog`).withWeight(1))
        pool.addEntry(LootEntry.of(`${ew}:wool_of_bat`, [1, 2]).withWeight(1))
        pool.addEntry(LootEntry.of(`${mc}:blaze_powder`, [1, 4]).withWeight(1))
    })
    table.createPool(pool => {
        pool.rolls([1, 2])
        pool.addEntry(LootEntry.of(`${mc}:glass_bottle`, [1, 3]).withWeight(11))
        pool.addEntry(global.enchanted.items.art_of_witchcraft().withWeight(9))
        pool.addEntry(LootEntry.of(`${ew}:arthana`).withWeight(5).damage([0.5, 0.9]))
        pool.addEntry(LootEntry.of(`${tf}:brittle_potion_flask`).withWeight(4))
        pool.addEntry(LootEntry.of(`${a}:antidote_vessel`).withWeight(1))
    })
})