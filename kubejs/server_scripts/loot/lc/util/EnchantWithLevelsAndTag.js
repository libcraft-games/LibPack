// entry    LootEntry       the entry to modify
// levels   NumberProvider  a provider for the levels with which to enchant
// tag      string          a tag which restricts enchantments
function EnchantWithLevelsAndTag(entry, levels, tag) {
    return entry.jsonFunction({
        function: 'minecraft:enchant_with_levels',
        levels: levels,
        options: tag
    })
}