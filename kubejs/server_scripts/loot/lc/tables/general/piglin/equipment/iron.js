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
                }
            }
        })
    }

    function enchantAndDamage(entry) {
        return entry.enchantWithLevels([15, 30]).damage([0.6, 0.8])
    }

    e.create('lc:tables/general/piglin/equipment/iron').createPool(pool => {
        pool.addEntry(decorate(enchantAndDamage(LootEntry.of(`${mc}:iron_helmet`))))
        pool.addEntry(decorate(enchantAndDamage(LootEntry.of(`${mc}:iron_chestplate`))))
        pool.addEntry(decorate(enchantAndDamage(LootEntry.of(`${mc}:iron_leggings`))))
        pool.addEntry(decorate(enchantAndDamage(LootEntry.of(`${mc}:iron_boots`))))
        pool.addEntry(decorate(enchantAndDamage(LootEntry.of(`${ae}:iron_gloves`))))
        
        pool.addEntry(enchantAndDamage(LootEntry.of(`${mc}:iron_pickaxe`)))
        pool.addEntry(enchantAndDamage(LootEntry.of(`${mc}:iron_axe`)))
        pool.addEntry(enchantAndDamage(LootEntry.of(`${mc}:iron_sword`)))
        pool.addEntry(enchantAndDamage(LootEntry.of(`${bw}:iron_club`)))
        pool.addEntry(enchantAndDamage(LootEntry.of(`${bw}:iron_spear`)))
        pool.addEntry(enchantAndDamage(LootEntry.of(`${bw}:iron_glaive`)))

        pool.addEntry(LootEntry.of(`${mc}:iron_horse_armor`))
    })
})