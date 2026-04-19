ServerEvents.recipes(e => {
    e.forEachRecipe({
        type: 'create:milling'
    }, r => {
        let json = r.json
        if(json.has('processingTime')) {
            let processing_time = parseInt(json.get('processingTime'))
            r.json.addProperty('processing_time', processing_time)
            r.save()
        }
    })
})