function CustomTrialKey(item, model, name) {
    return LootEntry.of(`minecraft:${item}`)
        .jsonFunction({
            function: 'minecraft:set_components',
            components: {
                custom_model_data: model
            }
        })
        .jsonFunction({
            function: 'minecraft:set_name',
            name: name,
            target: 'item_name'
        })
}