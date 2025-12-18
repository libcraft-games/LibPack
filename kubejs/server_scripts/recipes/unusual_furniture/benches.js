ServerEvents.recipes(e => {
    let uf = 'unusual_furniture'
    
    function itemId(ns, wood) {
        let name = 'bench'
        if(ns == 'minecraft') {            
            return `${uf}:${wood}_${name}`
        }
        else {
            if(ns == 'vanillabackport')
                ns = 'minecraft'
            return `everycomp:uf/${ns}/${wood}_${name}`
        }
    }

    for(let [ns, woods] in global.libcraft.woods) {
        for(let wood of woods) {  
            let item = itemId(ns, wood)
            e.remove({output: item})
            e.shaped(
                item,
                [
                    'BB',
                    'SS',
                    'RR'
                ],
                {
                    B: 'minecraft:iron_bars',
                    S: `${ns}:${wood}_slab`,
                    R: '#c:rods/iron'
                }
            )
        }
    }
})