// frameSize    int
// frames       List<json>
function exposure_film(itemId, frameSize, frames) {
    let mc = 'minecraft', ex = 'exposure'
    return LootEntry.of(itemId)
        .jsonFunction({
            function: `${mc}:set_components`,
            components: {
                'exposure:film_frame_size': frameSize,
                'exposure:film_frames': frames
            }
        })
}