ServerEvents.recipes(e => {
    for(let color of global.libcraft.colors) {
        e.shapeless(`minecraft:${color}_concrete`, [`#c:concretes`, `#c:dyes/${color}`])
    }
})