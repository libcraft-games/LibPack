ServerEvents.recipes(e => {
    let item = 'create:powdered_obsidian', block = 'biomesoplenty:black_sand'
    e.shaped(
        `${block}`,
        [
            'OO',
            'OO'
        ],
        {
            O: item
        }
    )
})