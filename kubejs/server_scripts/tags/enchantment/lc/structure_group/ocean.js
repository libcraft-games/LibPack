ServerEvents.tags('minecraft:enchantment', e => {    
    let tag = 'lc:structure_group/ocean'
    let mc = 'minecraft'
    let ns = 'nova_structures'
    let enchantments = [
        `${mc}:aqua_affinity`,
        `${mc}:binding_curse`,
        `${mc}:channeling`,
        `${mc}:depth_strider`,
        `${mc}:impaling`,
        `${mc}:luck_of_the_sea`,
        `${mc}:lure`,
        `${mc}:mending`,
        `${mc}:projectile_protection`,
        `${mc}:respiration`,
        `${mc}:riptide`,
        `${mc}:vanishing_curse`,
        `${ns}:conductivity_curse`,
    ]
    for(let enchantment of enchantments)
        e.add(tag, enchantment)
})