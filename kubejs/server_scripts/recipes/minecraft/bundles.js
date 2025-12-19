ServerEvents.recipes(e => {
    e.shapeless(`minecraft:bundle`, [`#minecraft:bundles`, `supplementaries:soap`])
    for(let color of global.libcraft.colors) {
        e.shapeless(`minecraft:${color}_bundle`, [`#minecraft:bundles`, `#c:dyes/${color}`])
    }
})