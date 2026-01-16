// function CreateExplorationMapEntry(structure, name, decoration, color, zoom)
let mapsToCreate = [
    ['minecraft:on_treasure_maps',              {translate: 'filled_map.buried_treasure'},                      'red_x',        null,       1],
    ['sweety_archaeology:on_mineshaft_maps',    {translate: 'item.sweety_archaeology.buried_mineshaft_map'},    'red_x',        null,       1],
    ['minecraft:pillager_outpost',              {translate: 'item.dnt.filled_map.pillager_outpost'},            'swamp_hut',    '5B242D',   4]
]
for(let [structure, name, decoration, color, zoom] of mapsToCreate) {
    global.libcraft.explorationMaps[structure] = CreateExplorationMapEntry(structure, name, decoration, color, zoom)
}