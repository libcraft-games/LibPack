ServerEvents.recipes(e => {
    let uf = 'unusual_furniture', ie = 'immersiveengineering'
    let grave = `${uf}:grave_skeleton`
    e.remove({output: grave})
    let bannerPattern = 'minecraft:skull_banner_pattern'
    e.shapeless(grave, ['minecraft:chiseled_stone_bricks', bannerPattern]).keepIngredient(bannerPattern)
})