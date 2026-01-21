// Takes a string in the format #RRGGBB and converts it to the decimal value Minecraft uses for colors
function HexToDec(hex) {
    return parseInt(Number(`0x${hex.substring(1)}`), 10)
}