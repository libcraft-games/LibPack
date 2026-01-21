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
    for(let [id, group] of customVanillaPotions) {
        registerPotions(id, `minecraft:${id}`, group)
    }
    let customOtherPotions = [
        ['runiclib', 'confusion', 'middle', ['base', 'long']]
    ]
    for(let [namespace, id, group, variants] of customOtherPotions) {
        registerPotionsOfVariants(id, `${namespace}:${id}`, group, variants)
    }
})