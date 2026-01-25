StartupEvents.registry('potion', e => {
    let minute = 60 * 20
    let potionDurationGroups = {
        // most potions
        general: {
            base:   3   * minute,
            long:   8   * minute,
            strong: 1.5 * minute
        },
        // e.g. poison
        short: {
            base:   0.75  * minute,
            long:   1.5   * minute,
            strong: 0.375 * minute
        },
        // e.g. levitation, weakness
        middle: {
            base:   1.5  * minute,
            long:   4    * minute,
            strong: 0.75 * minute
        }
    }
    // ======= FUNCTIONS =======
    function pref(key) {
        if(key === 'base')
            return ''
        return `${key}_`
    }
    function registerPotions(potionId, effectId, durationGroup) {
        registerPotionsOfVariants(potionId, effectId, durationGroup, null)
    }
    function registerPotionsOfVariants(potionId, effectId, durationGroup, variants) {
        for(let [key, duration] in potionDurationGroups[durationGroup]) {
            if(variants != null && !variants.includes(key))
                continue
            let specificId = `${pref(key)}${potionId}`
            e.create(`libcraft:${specificId}`)
             .effect(effectId, duration, key === 'strong' ? 1 : 0)
        }
    }
    // ======= FUNCTIONS =======

    let customVanillaPotions = [
        ['resistance',      'general'],
        ['mining_fatigue',  'general'],
        ['levitation',      'short'],
        ['blindness',       'short'],
        ['dolphins_grace',  'middle'],
        ['nausea',          'short'],
        ['wither',          'short']
    ]
    e.create('libcraft:unluck').effect('minecraft:unluck', 5 * minute, 0)
    for(let [id, group] of customVanillaPotions) {
        registerPotions(id, `minecraft:${id}`, group)
    }
    // todo: pyromaniac, brimstone vision, and heartbreak look too similar to
    //       instant health. give their potions custom colors
    let customRunicPotions = [
        ['confusion',       'middle',   false],
        ['perception',      'general',  true],
        ['retaliation',     'general',  true],
        ['water_walking',   'general',  false],
        ['lava_walking',    'general',  false],
        ['trail_blazing',   'middle',   false],
        ['pyromaniac',      'short',    true],
        ['burning_thorns',  'middle',   true],
        ['bleeding',        'short',    true],
        ['brimstone_vision','general',  false],
        ['creative_shock',  'short',    true],
        ['venom',           'short',    true],
        ['shatterspleen',   'short',    true],
        ['heartbreak',      'short',    true]
    ]
    for(let [id, group, hasStrong] of customRunicPotions) {
        let variants = hasStrong ? null : ['base', 'long']
        registerPotionsOfVariants(id, `runiclib:${id}`, group, variants)
    }
    registerPotionsOfVariants('ender_phasing', 'endersdelight:phasing', 'middle', ['base', 'long'])
})