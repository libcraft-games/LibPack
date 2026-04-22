ServerEvents.recipes(e => {
    let eg = 'extra_gauges'

    let item = `${eg}:string_gauge`
    e.remove({output: item})
    e.shapeless(`2x ${item}`, [
        `create:precision_mechanism`,
        `minecraft:name_tag`
    ])
})