ServerEvents.recipes(e => {
    let cl = 'create_factory_logistics'

    let item = `${cl}:factory_fluid_gauge`
    e.remove({output: item})
    e.shapeless(item, [
        `create:factory_gauge`,
        `create:fluid_pipe`
    ])
})