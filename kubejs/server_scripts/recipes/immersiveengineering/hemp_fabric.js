ServerEvents.recipes(e => {    
    let ie = global.ie.namespace
    let hemp = `${ie}:hemp_fiber`
    let fabric = `${ie}:hemp_fabric`
    e.remove({output: fabric})
    e.shapeless(fabric, [`4x ${hemp}`, `#c:rods/wooden`, `4x ${hemp}`])
})