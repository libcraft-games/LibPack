LootJS.modifiers(e => {    
    e.removeGlobalModifiers(/exposure:.*/)
    return
    e.removeGlobalModifiers(/exposure:simple_dungeon/)
    e.removeGlobalModifiers(/exposure:abandoned_mineshaft/)
    e.removeGlobalModifiers(/exposure:stronghold_crossing/)
    e.removeGlobalModifiers(/exposure:shipwreck_map/)
    e.removeGlobalModifiers(/exposure:village_plains_house/)
})