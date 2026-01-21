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
    function registerPotions(potionId, effectId, durationGroup, name) {
        for(let [key, duration] in potionDurationGroups[durationGroup]) {
            let specificId = `${pref(key)}${potionId}`
            let asdf = e.create(`libcraft:${specificId}`)
             .effect(effectId, duration, key === 'strong' ? 1 : 0)
             .displayName(name)
            console.log(`${asdf.getBuilderTranslationKey()}: ${name} / ${Component.translatableWithFallback('fuck', name).toString()}`)
        }
    }
    // ======= FUNCTIONS =======

    let customPotions = [
        ['resistance',      'general',  'Resistance'],
        ['mining_fatigue',  'general',  "Elder's Curse"],
        ['levitation',      'short',    'Levitation'],
        ['blindness',       'short',    'Blindness'],
        ['dolphins_grace',  'middle',   "Dolphin's Grace"],
        ['nausea',          'short',    'Dizziness'],
        ['wither',          'short',    'Decay']
    ]
    for(let [id, group, name] of customPotions) {
        registerPotions(id, `minecraft:${id}`, group, name)
    }
})