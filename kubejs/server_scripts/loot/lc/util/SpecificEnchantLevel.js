function SpecificEnchantLevel(entry, enchant, levels) {
    return entry.enchant(builder => {
        builder.withEnchantment(enchant, levels)
    })
}