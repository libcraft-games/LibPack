ServerEvents.recipes(e => {
    let bg = 'buildinggadgets2', ie = 'immersiveengineering'
    let item = `${bg}:gadget_cut_paste`
    e.remove({output: item})
    e.shaped(`${item}`,
        [
            'VGn',
            'BSN',
            'VCn'
        ],
        {
            V: 'enderscape:void_shale',
            S: 'minecraft:nether_star',
            n: 'biomesoplenty:null_plant',
            B: '#c:storage_blocks/netherite',
            G: `${bg}:gadget_copy_paste`,
            N: 'biomesoplenty:null_block',
            C: 'createaddition:modular_accumulator'
        }
    )
})