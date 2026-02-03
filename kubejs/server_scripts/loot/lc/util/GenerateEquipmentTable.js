// slot         := 'helmet' | 'chestplate' | 'leggings' | 'boots'
// material     := string | (namespace, string)
// armorItems   := material | (material, List<slot>) | List<(material, slot)> | List<LootEntry
// trim         := (pattern, material)
// func         := Func<LootEntry, LootEntry>
// armor        := (armorItems, trim?, func?)
// weapons      := itemId | (itemId, func) | LootEntry

// Generates a single equipment subtable, representing a single set of equipment enemies can generate with.
// args:
//  e           LootTableEvent
//  structure   string              name of the structure for which the equipment table is being generated
//  index       string              index of the subtable
//  armor       List<List<LootEntry>?>
//  weapons     List<LootEntry>?
function GenerateEquipmentSubtable(e, structure, index, armor, weapons) {
    let path = `lc:tables/autogen/equipment/${structure}/${index}`
    let table = e.create(path)
    for(let slot of armor) {
        if(!slot)
            continue
        table.createPool(pool => {
            for(let item of slot) {
                pool.addEntry(item)
            }
        })
    }
    if(weapons)
        table.createPool(pool => {
            for(let weapon of weapons) {
                pool.addEntry(weapon)
            }
        })
}
function MakeVanillaArmorSet(material) {
    return MakeArmorSet('minecraft', material)
}
function MakeArmorSet(namespace, material) {
    return [
        [LootEntry.of(`${namespace}:${material}_helmet`)],
        [LootEntry.of(`${namespace}:${material}_chestplate`)],
        [LootEntry.of(`${namespace}:${material}_leggings`)],
        [LootEntry.of(`${namespace}:${material}_boots`)]
    ]
}