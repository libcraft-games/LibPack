ServerEvents.recipes(e => {
    let ie = 'immersiveengineering', ts = 'toms_storage'
    let item = `${ts}:trim`
    e.remove({output: item})
    e.shaped(item,
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: `${ie}:plate_duroplast`,
            B: `${ie}:fiberboard`
        }
    )
})