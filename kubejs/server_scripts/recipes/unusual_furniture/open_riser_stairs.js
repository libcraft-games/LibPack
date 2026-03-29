ServerEvents.recipes(e => {
    let uf = 'unusual_furniture'

    function itemId(ns, wood) {
        let name = 'open_riser_stairs'
        if(ns === 'minecraft' && wood != 'pale_oak') {            
            return `${uf}:${wood}_${name}`
        }
        else {
            return `everycomp:uf/${ns}/${wood}_${name}`
        }
    }

    for(let [ns, woods] in global.libcraft.woods) {
        for(let wood of woods) {
            // missing item     
            if(wood === 'powdery')
                continue
            let item = itemId(ns, wood)
            e.remove({output: item})
            e.shaped(
                item,
                [
                    'S  ',
                    'sS ',
                    ' sS'
                ],
                {
                    s: '#c:rods/wooden',
                    S: `${ns}:${wood}_slab`
                }
            )
        }
    }
})