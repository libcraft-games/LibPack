LootJS.lootTables(e => {
    let ie = 'immersiveengineering', mc = 'minecraft', su = 'supplementaries'
    let common = [
        `${mc}:blast_protection`,
        `${mc}:bane_of_arthropods`,
    ]
    let uncommon = [
        `${mc}:unbreaking`,
        `${mc}:fortune`,
        `${mc}:silk_touch`
    ]
    let rare = [
        `veinmining:vein_mining`,
        `${mc}:mending`
    ]
    let curse = [
        `${mc}:binding_curse`,
        `${mc}:vanishing_curse`,
        `nova_structures:conductivity_curse`
    ]
    function book_with_enchants(enchant_counts) {
        let result = LootEntry.of('minecraft:book')
        for(let [list, count] of enchant_counts) {
            console.log(`list: ${list}, count: ${count}`)
            for(let i = 0; i < count; i++) {
                console.log(`\t${i}`)
                result = result.enchantRandomly(list)
            }
        }
        return result
    }
    e.create('lc:tables/structure/mineshaft/enchanted_books').createPool(pool => {
        pool.addEntry(book_with_enchants([[common, 1], [curse, 1]]).withWeight(12))
        pool.addEntry(book_with_enchants([[common, 1]]).withWeight(12).withQuality(1))
        pool.addEntry(book_with_enchants([[uncommon, 1], [curse, 1]]).withWeight(6))
        pool.addEntry(book_with_enchants([[uncommon, 1]]).withWeight(6).withQuality(1))
        pool.addEntry(book_with_enchants([[common, 2], [curse, 1]]).withWeight(5))
        pool.addEntry(book_with_enchants([[common, 2]]).withWeight(5).withQuality(1))
        pool.addEntry(book_with_enchants([[uncommon, 2], [curse, 1]]).withWeight(3))
        pool.addEntry(book_with_enchants([[rare, 1], [curse, 1]]).withWeight(3))
        pool.addEntry(book_with_enchants([[rare, 1]]).withWeight(3).withQuality(1))
    })
})