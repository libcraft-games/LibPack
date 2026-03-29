ServerEvents.recipes(e => {
    let cn = 'create_new_age'
    let ie = global.ie.namespace
    let mc = 'minecraft'

    let item = `${cn}:heat_pump`
    e.remove({output: item})
    e.shapeless(item, [
        `${cn}:heat_pipe`,
        `create:electron_tube`,
        `${ie}:component_iron`
    ])
})