// Generates a LootEntry which generates an explorer map with the specified properties.
// params:
//      structure           string                              the resource name or tag of the structure(s) to find
//      decoration          string                              the resource name of the decoration to place at the structure's location.
//                                                                  see https://minecraft.wiki/w/Explorer_Map#Item_data for a list of vanilla
//                                                                  decoration IDs.
//      name                string                              the name of the map in-game. if only a string, the fallback
//                          | {translate:str, fallback:str}         value is set on the created map and the translation key is invalid.
//      color               int                                 the color of the scribbles on the map. uses the decimal form of a hex RGB number,
//                                                                  see https://minecraft.wiki/w/Explorer_Map#Item_data for a calculator.
//      skipExistingChunks  bool = false                        whether structures in existing chunks should be skipped when the map is generated
//      zoom                int = 4                             the zoom level of the generated map
function explorerMap(structure, decoration, name, color, skipExistingChunks, zoom) {
    if((typeof name) === 'string')
        name = {
            translate: 'item.lc.filled_map.missing_key',
            fallback: name
        }
    if(skipExistingChunks === null)
        skipExistingChunks = false
    if(zoom === null)
        zoom = 4
    return LootEntry.of('minecraft:map').jsonFunction({
        function:               'minecraft:exploration_map',
        decoration:             decoration,
        destination:            structure,
        zoom:                   zoom,
        skip_existing_chunks:   skipExistingChunks
    }).jsonFunction({
        function:               'minecraft:set_components',
        components: {
            'minecraft:map_color': color,
            'minecraft:item_name': name
        }
    })
}
