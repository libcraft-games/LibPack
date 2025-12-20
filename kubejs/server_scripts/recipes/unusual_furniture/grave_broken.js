ServerEvents.recipes(e => {
    let uf = 'unusual_furniture', ie = 'immersiveengineering'
    let grave = `${uf}:grave_broken`
    e.remove({output: grave})
    e.shapeless(grave, [`${uf}:grave_skeleton`])
})