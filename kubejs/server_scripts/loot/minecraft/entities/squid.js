
LootJS.modifiers(e => {    
    let cd = 'culturaldelights'
    let calamari = `${cd}:raw_calamari`
    let knife = ItemFilter.tag('#c:tools/knife')
    for(let prefix of ['', 'glow_']) {
        let table = `minecraft:entities/${prefix}squid`
        let squid = `${cd}:${prefix}squid`
        let ink_sac = `minecraft:${prefix}ink_sac`
        e.addTableModifier(table)
        .removeLoot(ItemFilter.anyOf(squid))
        .addLoot(
            LootEntry.of(squid)
                    .setCount(1)
                    .matchMainHand(knife)
        )
        .addLoot(
            LootEntry.group(
                LootEntry.of(ink_sac)
                        .setCount([1, 3])
                        .applyEnchantmentBonus([0, 1]),
                LootEntry.of(calamari)
                        .setCount([0, 2])
                        .applyEnchantmentBonus([0, 1]))
                    .matchMainHand(ItemFilter.not(knife))
        )
    }
})