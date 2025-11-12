let file = "recipes/enderscape/magnia_sprouts_cloche.js";

let es = 'enderscape'
let ie = 'immersiveengineering'

ServerEvents.recipes(e => {
    ['alluring', 'repulsive'].forEach(sproutType => {
        let sprout = `${es}:${sproutType}_magnia_sprout`
        let substrate = `${es}:${sproutType}_magnia`
        global.libcraft.potion_fluids.forEach(fluid => {
            e.custom({
                type: `${ie}:cloche`,
                fluid: {
                    type: 'neoforge:components', 
                    components: 
                    {
                        'minecraft:potion_contents': {
                            potion: `${es}:low_gravity`,
                        }
                    },
                    fluids: fluid
                },
                input: {item: 'endersdelight:ender_shard'},
                time: 1000,
                render:
                {
                    block: sprout,
                    type: `${ie}:generic`
                },
                results: [{id: sprout}],
                soil: {item: substrate}
            });
        }); 
    });
    console.log(`applied changes from ${file}`);
});