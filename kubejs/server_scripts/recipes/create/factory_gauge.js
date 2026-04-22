ServerEvents.recipes(e => {
    let cv = 'create_vibrant_vaults'

    let item = `create:factory_gauge`
    e.remove({output: item, input: `create:stock_link`})
    e.remove({output: item, input: `#${cv}:vibrant_stock_links`})
    e.shapeless(`2x ${item}`, [
        `create:precision_mechanism`,
        `create:chute`
    ])
})