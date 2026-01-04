LootJS.lootTables(e => {
    let sm = 'scriptor'
    // see https://www.desmos.com/calculator/6fcgsby9o5 for math
    // tier: int ∈ {1, 2, 3, 4}
    // returns: int
    function bookWeight(tier) {
        return 4 ** (4 - tier)
    }
    // tier: int ∈ {1, 2, 3, 4}
    // returns: int
    function scrapWeight(tier) {
        return 2 * bookWeight(tier)
    }
    // tier: int ∈ {1, 2, 3, 4}
    // returns: int
    function scrollWeight(tier) {
        return (tier / 2) * (bookWeight(tier) + scrapWeight(tier))
    }
    // tier: List<int> where each element ∈ {1, 2, 3, 4}
    // returns: object with the weights idk
    function allWeights(tiers) {
        let result = {
            totalScrollWeight: 0,
            bookWeights: {},
            scrapWeights: {}
        }
        for(let tier of tiers) {
            result.totalScrollWeight += scrollWeight(tier)
            result.bookWeights[tier] = bookWeight(tier)
            result.scrapWeights[tier] = tier <= 3 ? scrapWeight(tier) : 0
        }
        return result
    }
    function range(start, end) {
        let result = []
        for(let i = start; i <= end; i++)
            result.push(i)
        return result
    }
    function registerSingleTier(e, tier) {
        let path = `lc:tables/general/scriptor/tier_${tier}`
        let table = e.create(path)
        table.createPool(pool => {
            pool.addEntry(LootEntry.of(`${sm}:identify_scroll`, [1, tier]).withWeight(scrollWeight(tier)))
            if(tier <= 3)
                pool.addEntry(LootEntry.of(`${sm}:scrap_tier${tier}`).withWeight(scrapWeight(tier)))
            pool.addEntry(LootEntry.of(`${sm}:tome_tier${tier}`).withWeight(bookWeight(tier)))
        })
    }
    // e: event
    // tiers: List<int> where each value in [1, 4]
    function registerTierGroup(e, tiers) {
        let path = `lc:tables/general/scriptor/tiers_${tiers.join('_')}`
        let table = e.create(path)
        let weights = allWeights(tiers)
        table.createPool(pool => {
            // todo: group books and scraps into their own categories
            pool.addEntry(LootEntry.of(`${sm}:identify_scroll`, [1, Math.max.apply(null, tiers)]).withWeight(weights.totalScrollWeight))
            let scraps = []
            let books = []
            for(let tier of  tiers) {
                if(tier <= 3) // no tier 4 spell scraps
                    scraps.push(LootEntry.of(`${sm}:scrap_tier${tier}`).withWeight(weights.scrapWeights[tier]).withQuality(tier))                
                books.push(LootEntry.of(`${sm}:tome_tier${tier}`).withWeight(weights.bookWeights[tier]).withQuality(tier * 2))
            }
            pool.addEntry(LootEntry.group(scraps))
            pool.addEntry(LootEntry.group(books))
        })
    }
    for(let i = 1; i <= 4; i++) {
        registerSingleTier(e, i)
        for(let j = i + 1; j <= 4; j++) {
            registerTierGroup(e, range(i, j))
        }
    }
})