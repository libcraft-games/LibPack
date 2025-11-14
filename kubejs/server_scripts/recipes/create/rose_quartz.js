let file = "recipes/create/rose_quartz.js";

let create_rose_quartz = 'create:rose_quartz';
let bop_rose_quartz = 'biomesoplenty:rose_quartz_chunk';
let redstone = '#c:dusts/redstone';

ServerEvents.recipes(e => {
    e.shapeless(
        Item.of(create_rose_quartz),
        [
            bop_rose_quartz,
            `3x ${redstone}`
        ]
    )

    console.log(`applied changes from ${file}`);
});