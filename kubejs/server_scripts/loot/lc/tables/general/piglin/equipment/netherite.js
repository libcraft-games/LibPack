LootJS.lootTables(e => {
    let ae = 'aether'
    let bw = 'basicweapons'
    let mc = 'minecraft'
    let nh = 'netherite_horse_armor'
    
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

    function damage(entry) {
        return entry.damage([0.01, 0.15])
    }

    e.create('lc:tables/general/piglin/equipment/netherite').createPool(pool => {
        pool.addEntry(decorate(damage(LootEntry.of(`${mc}:netherite_helmet`))))
        pool.addEntry(decorate(damage(LootEntry.of(`${mc}:netherite_chestplate`))))
        pool.addEntry(decorate(damage(LootEntry.of(`${mc}:netherite_leggings`))))
        pool.addEntry(decorate(damage(LootEntry.of(`${mc}:netherite_boots`))))
        pool.addEntry(decorate(damage(LootEntry.of(`${ae}:netherite_gloves`))))
        
        pool.addEntry(damage(LootEntry.of(`${mc}:netherite_pickaxe`)))
        pool.addEntry(damage(LootEntry.of(`${mc}:netherite_axe`)))
        pool.addEntry(damage(LootEntry.of(`${mc}:netherite_sword`)))
        pool.addEntry(damage(LootEntry.of(`${bw}:netherite_club`)))
        pool.addEntry(damage(LootEntry.of(`${bw}:netherite_spear`)))
        pool.addEntry(damage(LootEntry.of(`${bw}:netherite_glaive`)))

        pool.addEntry(LootEntry.of(`${nh}:netherite_horse_armor`))
    })
})