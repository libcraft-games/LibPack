ServerEvents.recipes(e => {
    let cf = 'createfood'
    let ed = 'expandeddelight'
    let mc = 'minecraft'
    let item = `${ed}:asparagus_frittata`
    e.remove({ output: item})
    e.shapeless(`2x ${item}`,
        [
            `${cf}:toast_slice`,
            `${ed}:goat_cheese_slice`,
            `${ed}:cranberries`
        ]
    )
})