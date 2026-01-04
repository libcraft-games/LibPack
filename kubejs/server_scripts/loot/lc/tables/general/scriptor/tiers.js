LootJS.lootTables(e => {
    let sm = 'scriptor'
    // see https://www.desmos.com/calculator/6fcgsby9o5 for math
    // tier: int ∈ {1, 2, 3, 4}
    // returns: int
    function book_weight(tier) {
        return 4 ** (4 - tier)
    }
    // tier: int ∈ {1, 2, 3, 4}
    // returns: int
    function scrap_weight(tier) {
        return 2 * book_weight(tier)
    }
    // tier: int ∈ {1, 2, 3, 4}
    // returns: int
    function scroll_weight(tier) {
        return (tier / 2) * (book_weight(tier) + scrap_weight(tier))
    }
    // tier: List<int> where each element ∈ {1, 2, 3, 4}
    // returns: object with the weights idk
    function all_weights(tiers) {
        let result = {
            totalScrollWeight: 0,
            bookWeights: {},
            scrapWeights: {}
        }
        for(let tier of tiers) {
            result.totalScrollWeight += scroll_weight(tier)
            result.bookWeights[tier] = book_weight(tier)
            result.scrapWeights[tier] = tier <= 3 ? scrap_weight(tier) : 0
        }
        return result
    }
    function range(start, end) {
        let result = []
        for(let i = start; i <= end; i++)
            result.push(i)
        return result
    }
    // e: event
    // tiers: List<int> where each value in [1, 4]
    function register_scriptor_tier(e, tiers) {
        let path = `lc:tables/general/scriptor/tier_${tiers.join('_')}`
        let table = e.create(path)
        let weights = all_weights(tiers)
        table.createPool(pool => {
            // todo: group books and scraps into their own categories
            pool.addEntry(LootEntry.of(`${sm}:identify_scroll`, [1, Math.max.apply(null, tiers)]).withWeight(weights.totalScrollWeight))
            for(let tier of  tiers) {
                if(tier <= 3) // no tier 4 spell scraps
                    pool.addEntry(LootEntry.of(`${sm}:scrap_tier${tier}`).withWeight(weights.scrapWeights[tier]).withQuality(tier))
                pool.addEntry(LootEntry.of(`${sm}:tome_tier${tier}`).withWeight(weights.bookWeights[tier]).withQuality(tier * 2))
            }
        })
    }
    for(let i = 1; i <= 4; i++) {
        for(let j = i; j <= 4; j++) {
            register_scriptor_tier(e, range(i, j))
        }
    }
})