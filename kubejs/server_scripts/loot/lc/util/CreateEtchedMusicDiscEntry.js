// from https://github.com/jacksonhardaway/etched/blob/70a762501732a551e287294f421142893156a8c7/src/main/java/gg/moonflower/etched/api/record/TrackData.java
function EtchedTrackData(url, title, artist) {
    return {
        Url: url,
        Title: title,
        Author: artist
    }
}
const EtchedLabelPattern = {
    // top and bottom parts are color 1 and middle line is color 2
    flat        : 'flat',
    // actually the pattern from Ward (and 13)
    cross       : 'cross',
    // the pattern from mellohi
    // looks very similar to star
    eye         : 'eye',
    // the pattern from chirp
    parallel    : 'parallel',
    // essentially identical to eye,
    // but the two color 2 pixels adjacent to the top middle color 1 pixel are slightly darker 
    star        : 'star',
    // fixed color gold, from pigstep
    gold        : 'gold'
}
// from https://github.com/jacksonhardaway/etched/blob/1.21.x/src/main/java/gg/moonflower/etched/common/component/DiscAppearanceComponent.java
//
// args:
//  pattern                 EtchedLabelPattern  the pattern of the music disc
//  discColor               hex color           the color of the disc. note that this multiplies a base texture,
//                                              so any target color should be divided by (approximately) #d6d6d6
//  labelPrimaryColor       color               the primary color of the label
//  labelSecondaryColor     color               the secondary color of the label
function EtchedLabelAppearance(pattern, labelPrimaryColor, labelSecondaryColor) {
    return {
        pattern:                pattern,
        labelPrimaryColor:      HexToDec(labelPrimaryColor),
        labelSecondaryColor:    HexToDec(labelSecondaryColor)
    }
}
// args:
//  music       EtchedTrackData
//  appearance  EtchedLabelAppearance
function CreateEtchedMusicDiscEntry(music, discColor, appearance) {
    if(discColor === null) {
        // default color, too lazy to convert to hex
        discColor = -11447983
    } else {
        discColor = HexToDec(discColor)
    }
    return LootEntry.of('etched:etched_music_disc').jsonFunction({
        function: 'minecraft:set_components',
        components: {
            'etched:music': [music],
            'etched:disc_appearance': {
                pattern: appearance.pattern,
                labelPrimaryColor: appearance.labelPrimaryColor,
                labelSecondaryColor: appearance.labelSecondaryColor,
                discColor: discColor
            }
        }
    })
}