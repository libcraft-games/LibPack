// https://kubejs.com/wiki/global-scope
global.libcraft = {
    // List<string>
    colors: [
        "white", 
        "light_gray", 
        "gray",
        "black",
        "brown",
        "red",
        "orange",
        "yellow",
        "lime",
        "green",
        "cyan",
        "light_blue",
        "blue",
        "purple",
        "magenta",
        "pink"
    ],
    // Dict<string, List<string>>
    woods: {
        minecraft: [
            "oak",
            "spruce",
            "birch",
            "jungle",
            "acacia",
            "dark_oak",
            "mangrove",
            "cherry",
            "bamboo",
            "crimson",
            "warped"
        ],
        biomesoplenty: [
            "maple",
            "palm",
            "empyreal",
            "fir",
            "hellbark",
            "mahogany",
            "dead",
            "magic",
            "umbran",
            "pine",
            "redwood",
            "jacaranda",
            "willow",
        ],
        enchanted: [
            "rowan",
            "alder",
            "hawthorn",
        ],
        enderscape: [
            "veiled",
            "celestial",
            "murublight"
        ],
        twilightforest: [
            "mining",
            "time",
            "dark",
            "sorting",
            "canopy",
            "twilight_oak",
            "mangrove",
            "transformation",
        ],
        undergarden: [
            "smogstem",
            "grongle",
            "wigglewood",
        ],
        // needs to be manually converted to minecraft namespace at end user
        // due to everycomp adding most instances
        vanillabackport: [
            "pale_oak"
        ],
        mynethersdelight: [
            "powdery"
        ],
        aether: [
            "skyroot",
        ]
    },
    potion_fluids: [
        'immersiveengineering:potion',
        'create:potion'
    ]
}