

let ens = 'enderscape'
let ets = 'eternal_starlight'
let ie = 'immersiveengineering'
let bop = 'biomesoplenty'
let tf = 'twilightforest'
let ug = 'undergarden'

// pretend these are tuples of (item_id, temperature)
// ignoring variants like bricks and stuff to avoid bloat
let blockTemps = [
    [`${ens}:void_shale`, 3],
    [`${ets}:eternal_ice`, 250],
    [`${ets}:haze_ice`, 255],
    [`${ets}:abyssal_magma_block`, 1450],
    [`${ets}:thermabyssal_magma_block`, 1750],
    [`${ets}:thermal_springstone`, 343],
    [`${ets}:glacite`, 150],
    [`${ets}:glacite_block`, 50],
    // todo: some other Eternal Starlight blocks with which i am unfamiliar
    [`${bop}:thermal_calcite`, 373],
    [`${bop}:brimstone`, 323],
    [`${bop}:anomaly`, 2500],
    [`${bop}:null_block`, 0],
    ['aether:icestone', 260],
    ['aether:cold_aercloud', 278],
    [`${tf}:fiery_block`, 1900],
    [`${tf}:carminite_block`, 1800],
    [`${ug}:raw_froststeel_block`, 240],
    [`${ug}:froststeel_block`, 200]
]

ServerEvents.recipes(e => {
    blockTemps.forEach(x => {
        let [block, temp] = x;
        e.custom({
            type: `${ie}:thermoelectric_source`,
            singleBlock: block,
            tempKelvin: temp
        });
    })
    console.log(`applied all changes successfully!`);
});