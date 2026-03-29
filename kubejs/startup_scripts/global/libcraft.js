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
            "warped",
            "pale_oak"
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
        mynethersdelight: [
            "powdery"
        ],
        aether: [
            "skyroot",
        ],
        expandeddelight: [
            'cinnamon'
        ]
    },
    potion_fluids: [
        'immersiveengineering:potion',
        'create:potion'
    ],
    // Dict<string, object>
    explorationMapData: {
        buried_treasure: {
            decoration: 'red_x',
            destination: 'minecraft:on_treasure_maps',
            zoom: 1,
            name: {translate: 'filled_map.buried_treasure'}
        },
        buried_mineshaft: {
            decoration: 'target_point',
            destination: 'sweety_archaeology:on_mineshaft_maps',
            zoom: 1,
            name: {translate: 'item.sweety_archaeology.buried_mineshaft_map'}
        },
        pillager_outpost: {
            decoration: 'swamp_hut',
            destination: 'minecraft:pillager_outpost',
            name: {translate: 'item.dnt.filled_map.pillager_outpost', fallback: 'Pillager Outpost Map'},
            color: '#5B242D'
        },
        ancient_city: {
            decoration: 'monument',
            destination: 'minecraft:ancient_city',
            name: {translate: 'item.dnt.filled_map.ancient_city', fallback: 'Ancient City Map'},
            color: '#024351'
        },
        witch_villa: {
            decoration: 'mansion',
            destination: 'nova_structures:witch_villa',
            name: {translate: 'item.dnt.filled_map.witch_villa', fallback: 'Witch Villa Map'},
            color: '#3f1b66'
        },
        badlands_miner_outpost: {
            decoration: 'target_x',
            destination: 'nova_structures:badlands_miner_outpost',
            name: {translate: 'item.dnt.filled_map.badlands_miner_outpost'},
            color: '#81431d'
        },
        illager_hideout: {
            decoration: 'swamp_hut',
            destination: 'nova_structures:illager_hideout',
            name: {translate: 'item.dnt.filled_map.illager_hideout'},
            color: '#975D2C'
        },
        creeping_crypt: {
            decoration: 'jungle_temple',
            destination: 'nova_structures:creeping_crypt',
            name: {translate: 'item.dnt.filled_map.creeping_crypt'},
            color: '#2FB325'
        },
        desert_ruins: {
            decoration: 'village_desert',
            destination: 'nova_structures:desert_ruins',
            name: {translate: 'item.dnt.filled_map.desert_ruins'},
            color: '#fcfc0b'
        },
        illager_manor: {
            decoration: 'mansion',
            destination: 'nova_structures:illager_manor',
            name: {translate: 'item.dnt.filled_map.illager_manor'},
            color: '#b98552'
        },
        jungle_ruins: {
            decoration: 'jungle_temple',
            destination: 'nova_structures:jungle_ruins',
            name: {translate: 'item.dnt.filled_map.jungle_ruins'},
            color: '#7be754'
        },
        lone_citadel: {
            decoration: 'target_x',
            destination: 'nova_structures:lone_citadel',
            name: {translate: 'item.dnt.filled_map.lone_citadel'},
            color: '#567fbd'
        },
        toxic_lair: {
            decoration: 'jungle_temple',
            destination: 'nova_structures:toxic_lair',
            name: {translate: 'item.dnt.filled_map.toxic_lair'},
            color: '#679f68'
        },
        trident_trial_monument: {
            decoration: 'monument',
            destination: 'nova_structures:trident_trial_monument',
            name: {translate: 'item.dnt.filled_map.trident_trial_monument'},
            color: '#2e6053'
        },
        undead_crypt: {
            decoration: 'jungle_temple',
            destination: 'nova_structures:undead_crypt',
            name: {translate: 'item.dnt.filled_map.undead_crypt'},
            color: '#27151e'
        },
        piglin_outstation: {
            decoration: 'target_point',
            destination: 'nova_structures:piglin_outstation',
            name: {translate: 'item.dnt.filled_map.piglin_outstation'},
            color: '#5b242d'
        },
        bastion: {
            decoration: 'target_point',
            destination: 'minecraft:bastion_remnant',
            name: {translate: 'item.dnt.filled_map.bastion'},
            color: '#38242d'
        },
        hamlet: {
            decoration: 'target_point',
            destination: 'nova_structures:hamlet',
            name: {translate: 'item.dnt.filled_map.hamlet'},
            color: '#48242d'
        },
        firecaller_hut: {
            decoration: 'village_savanna',
            destination: 'illagerinvasion:firecaller_hut',
            name: 'Firecaller Hut Map',
            color: '#873f0f'
        },
        illager_fort: {
            decoration: 'village_taiga',
            destination: 'illagerinvasion:illager_fort',
            name: 'Illager Fort Map',
            color: '#32663c'
        },
        illusioner_tower: {
            decoration: 'mansion',
            destination: 'illagerinvasion:illusioner_tower',
            name: 'Illusioner Tower Map',
            color: '#135791'
        },
        labyrinth: {
            decoration: 'trial_chambers',
            destination: 'illagerinvasion:labyrinth',
            name: 'Illager Labyrinth Map',
            color: '#484748'
        },
        sorcerer_hut: {
            decoration: 'swamp_hut',
            destination: 'illagerinvasion:sorcerer_hut',
            name: 'Sorcerer Hut Map',
            color: '#421336'
        },
    }
}