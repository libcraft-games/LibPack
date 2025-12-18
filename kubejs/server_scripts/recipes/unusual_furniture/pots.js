ServerEvents.recipes(e => {
    let uf = 'unusual_furniture'
    for(let type of ['greek', 'huge', 'stone', 'tall_clay', 'vintage', 'blackstone', 'fudge']) {
        e.remove({output: `${uf}:${type}_pot`})
    }
})