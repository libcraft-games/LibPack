ServerEvents.recipes(e => {
    let ie = 'immersiveengineering', ts = 'toms_storage'
    let item = `${ts}:open_crate`
    e.remove({output: item})
    e.shapeless(item, [`${ts}:trim`, 'create:chute'])
})