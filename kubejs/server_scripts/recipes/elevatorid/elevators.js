ServerEvents.recipes(e => {
    let elevatorid = 'elevatorid'

    function magnia_sprout(type) {
        return `enderscape:${type}_magnia_sprout`
    }

    global.libcraft.colors.forEach(color => {
        let elevator = `${elevatorid}:elevator_${color}`
        let wool = `minecraft:${color}_wool`
        e.remove({output: elevator})
        e.shaped(
            Item.of(elevator),
            [
                'WAW',
                'ELE',
                'WRW'
            ],
            {
                W: wool,
                E: 'minecraft:end_stone',
                A: magnia_sprout('alluring'),
                R: magnia_sprout('repulsive'),
                L: 'supplementaries:lumisene_bucket'
            }
        );
        e.shapeless(elevator,
            [`#${elevatorid}:elevators`, `#c:dyes/${color}`]
        )
    })
})