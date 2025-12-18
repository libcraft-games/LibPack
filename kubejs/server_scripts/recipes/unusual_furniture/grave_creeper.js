ServerEvents.recipes(e => {
    let uf = 'unusual_furniture', ie = 'immersiveengineering'
    let grave = `${uf}:grave_creeper`
    e.remove({output: grave})
    let bannerPattern = 'minecraft:creeper_banner_pattern'
    e.shapeless(grave, ['minecraft:chiseled_stone_bricks', bannerPattern]).keepIngredient(bannerPattern)
})