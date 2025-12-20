ServerEvents.recipes(e => {
    let ie = 'immersiveengineering'
    let ts = 'toms_storage'
    let mc = 'minecraft'
    let item = `${ts}:storage_terminal`
    e.remove({output: item})
    e.shaped(item,
        [
            'TAT',
            'BCB',
            'TDT'
        ],
        {
            T: `${ts}:trim`,
            A: `${ie}:component_electronic`,
            B: `${mc}:ender_eye`,
            C: `create:electron_tube`,
            D: `create:rose_quartz_lamp`
        }
    )
})