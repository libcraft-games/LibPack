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
        return entry.enchantWithLevels([25, 35])
    }

    e.create('lc:tables/general/piglin/equipment/gold').createPool(pool => {
        pool.addEntry(decorate(enchantAndDamage(LootEntry.of(`${mc}:golden_helmet`))))
        pool.addEntry(decorate(enchantAndDamage(LootEntry.of(`${mc}:golden_chestplate`))))
        pool.addEntry(decorate(enchantAndDamage(LootEntry.of(`${mc}:golden_leggings`))))
        pool.addEntry(decorate(enchantAndDamage(LootEntry.of(`${mc}:golden_boots`))))
        pool.addEntry(decorate(enchantAndDamage(LootEntry.of(`${ae}:golden_gloves`))))
        
        pool.addEntry(enchantAndDamage(LootEntry.of(`${mc}:golden_pickaxe`)))
        pool.addEntry(enchantAndDamage(LootEntry.of(`${mc}:golden_axe`)))
        pool.addEntry(enchantAndDamage(LootEntry.of(`${mc}:golden_sword`)))
        pool.addEntry(enchantAndDamage(LootEntry.of(`${bw}:golden_club`)))
        pool.addEntry(enchantAndDamage(LootEntry.of(`${bw}:golden_spear`)))
        pool.addEntry(enchantAndDamage(LootEntry.of(`${bw}:golden_glaive`)))

        pool.addEntry(LootEntry.of(`${mc}:golden_horse_armor`))
    })
})