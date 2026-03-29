global.enchanted = 
{
    items: {
        art_of_witchcraft: () => LootEntry.of(`modopedia:book`).jsonFunction({
            function: 'minecraft:set_components',
            components: {
                'modopedia:book': 'enchanted:art_of_witchcraft'
            }
        })
    }
}