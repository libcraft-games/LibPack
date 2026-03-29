LootJS.lootTables(e => {
    let ae = 'aether'
    let bw = 'basicweapons'
    let mc = 'minecraft'
    
    function decorate(armor) {
        return armor.jsonFunction({
            function: `${mc}:set_components`,
            components: {
                trim: {
                    material: `${mc}:gold`,
                    pattern: `${mc}:snout`
                },
                dyed_color: { rgb: 1908001 }
            }
        })
    }
    function dye(armor) {
        return armor.jsonFunction({
            function: `${mc}:set_components`,
            components: {
                dyed_color: { rgb: 1908001 }
            }
        })
    }

    function enchantAndDamage(entry) {
        return entry.enchantRandomly().damage([0.6, 0.9])
    }

    e.create('lc:tables/general/piglin/equipment/leather').createPool(pool => {
        pool.addEntry(decorate(enchantAndDamage(LootEntry.of(`${mc}:leather_helmet`))))
        pool.addEntry(decorate(enchantAndDamage(LootEntry.of(`${mc}:leather_chestplate`))))
        pool.addEntry(decorate(enchantAndDamage(LootEntry.of(`${mc}:leather_leggings`))))
        pool.addEntry(decorate(enchantAndDamage(LootEntry.of(`${mc}:leather_boots`))))
        pool.addEntry(decorate(enchantAndDamage(LootEntry.of(`${ae}:leather_gloves`))))

        pool.addEntry(dye(LootEntry.of(`${mc}:leather_horse_armor`)))
    })
})