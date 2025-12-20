ServerEvents.recipes(e => {
    let ie = 'immersiveengineering'
    let ts = 'toms_storage'
    let mc = 'minecraft'
    let cdp = 'create_dragons_plus'
    let sos = 'sophisticatedstorage'
    let item = `${ts}:paint_kit`
    e.remove({output: item})
    e.shapeless(`${item}`, [
        `${sos}:paintbrush`,             
        `${cdp}:cyan_dye_bucket`,
        `${cdp}:magenta_dye_bucket`,
        `${cdp}:yellow_dye_bucket`,
        `${cdp}:black_dye_bucket`,
        `${mc}:bucket`
    ])
})