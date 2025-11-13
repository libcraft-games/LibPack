let ss = 'smallships'
let vanilla_woods = [
    'oak',
    'spruce',
    'birch',
    'jungle',
    'acacia',
    'cherry',
    'dark_oak',
    'mangrove',
    'bamboo'
]
function boatName(wood) {
    return wood == 'bamboo' ? 'raft' : 'boat'
}
function boatOf(wood) {
    return `minecraft:${wood}_${boatName(wood)}`
}
function chestBoatOf(wood) {
    return `minecraft:${wood}_chest_${boatName(wood)}`
}
function shipOf(wood, shipType) {
    return `${ss}:${wood}_${shipType}`
}