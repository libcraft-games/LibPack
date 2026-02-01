function exposure_photo(image_name) {
    let mc = 'minecraft', ex = 'exposure'
    return LootEntry.of(`${ex}:photograph`)
        .jsonFunction({
            function: `${mc}:set_components`,
            components: {
                'exposure:photograph_frame': {
                    identifier: {
                        texture: `${ex}:textures/${ex}/${image_name}.png`
                    }
                }
            }
        })
}
function exposure_addPhoto(entry, image_name) {
    let mc = 'minecraft', ex = 'exposure'
    return entry.jsonFunction({
        function: `${mc}:set_components`,
        components: {
            'exposure:photograph_frame': {
                identifier: {
                    texture: `${ex}:textures/${ex}/${image_name}.png`
                }
            }
        }
    })
}
function exposure_AgedPhoto(imageName) {
    let mc = 'minecraft', ex = 'exposure'
    let result = LootEntry.of(`${ex}:aged_photograph`)
    return exposure_addPhoto(result, imageName)
}