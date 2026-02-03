LootJS.lootTables(e => {
    let bw = 'basicweapons'
    let ie = global.ie.namespace
    let mc = 'minecraft'
    let tf = 'twilightforest'
    let table = e.getLootTable('nova_structures:equipment/creeping_crypt/equipment_creeping')
    function trim(armor) {
        return armor.jsonFunction({
            function: `${mc}:set_components`,
            components: {
                trim: {
                    pattern: `${mc}:silence`,
                    material: `${tf}:steeleaf`
                }
            }
        })
    }
    function enchantArmor(armor) {
        return armor.enchantRandomly(`${mc}:blast_protection`)
    }
    function enchantWeapon(weapon) {
        return weapon.enchantRandomly(`${mc}:knockback`)
    }
    
    e.create('lc:tables/equipment/subtables/creeping_crypt/1').createPool(pool => {
        pool.addEntry(enchantArmor(trim(LootEntry.of(`${ie}:armor_steel_helmet`))))
    }).createPool(pool => {
        pool.addEntry(enchantArmor(trim(LootEntry.of(`${ie}:armor_steel_chestplate`))))
    }).createPool(pool => {
        pool.addEntry(enchantArmor(trim(LootEntry.of(`${ie}:armor_steel_leggings`))))
    }).createPool(pool => {
        pool.addEntry(enchantArmor(trim(LootEntry.of(`${ie}:armor_steel_boots`))))
    }).createPool(pool => {
        pool.addEntry(enchantWeapon(LootEntry.of(`${bw}:steel_hammer`)))
    })
    e.create('lc:tables/equipment/subtables/creeping_crypt/2').createPool(pool => {
        pool.addEntry(trim(LootEntry.of(`${ie}:armor_steel_helmet`)))
    }).createPool(pool => {
        pool.addEntry(trim(LootEntry.of(`${ie}:armor_steel_chestplate`)))
    }).createPool(pool => {
        pool.addEntry(trim(LootEntry.of(`${ie}:armor_steel_leggings`)))
    }).createPool(pool => {
        pool.addEntry(trim(LootEntry.of(`${ie}:armor_steel_boots`)))
    }).createPool(pool => {
        pool.addEntry(LootEntry.of(`${bw}:steel_hammer`))
    })
    e.create('lc:tables/equipment/subtables/creeping_crypt/3').createPool(pool => {
        pool.addEntry(trim(LootEntry.of(`${mc}:chainmail_helmet`)))
    }).createPool(pool => {
        pool.addEntry(trim(LootEntry.of(`${mc}:chainmail_chestplate`)))
    }).createPool(pool => {
        pool.addEntry(trim(LootEntry.of(`${mc}:chainmail_leggings`)))
    }).createPool(pool => {
        pool.addEntry(trim(LootEntry.of(`${mc}:chainmail_boots`)))
    }).createPool(pool => {
        pool.addEntry(LootEntry.of(`${bw}:iron_hammer`))
    })

    table.clear()
    table.createPool(pool => {
        pool.addEntry(LootEntry.reference('lc:tables/equipment/subtables/creeping_crypt/1'))
        pool.addEntry(LootEntry.reference('lc:tables/equipment/subtables/creeping_crypt/2'))
        pool.addEntry(LootEntry.reference('lc:tables/equipment/subtables/creeping_crypt/3'))
    })
})