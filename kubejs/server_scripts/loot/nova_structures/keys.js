const NovaStructuresKeys = {
    shrine: {
        basic: CustomTrialKey('trial_key', 711, 'Shrine Key'),
        ominous: CustomTrialKey('ominous_trial_key', 711, 'Ominous Shrine Key')
    },
    creeping_crypt: CustomTrialKey('trial_key', 712,
            {translate: 'item.dnt.creeper_key', fallback: 'Creeping Key'}),
    lone_citadel: {
        basic: CustomTrialKey('trial_key', 713, 'Citadel Key'),
        ominous: CustomTrialKey('ominous_trial_key', 714, 'Citadel Boss Key')
    },
    trident_trial_monument: {
        basic: CustomTrialKey('trial_key', 715,
            {translate: 'item.dnt.trident_trial_key', fallback: 'Trident Trial Key'}),
        ominous: CustomTrialKey('ominous_trial_key', 716,
            {translate: 'item.dnt.trident_trial_boss_key', fallback: 'Trident Trial Boss Key'})
    },
    piglin_donjon: CustomTrialKey('trial_key', 717, 
        {translate: 'item.dnt.piglin_donjon_key', fallback: 'Piglin Donjon Key'}),
    piglin_outstation: CustomTrialKey('trial_key', 718, 
        {translate: 'item.dnt.piglin_outstation_key', fallback: 'Piglin Outstation Key'}),
    nether_keep: CustomTrialKey('trial_key', 719,
            {translate: 'item.dnt.nether_keep_key', fallback: 'Nether Keep Key'}),
    end_castle: {
        basic: CustomTrialKey('trial_key', 721, 'End Castle Key'),
        ominous: CustomTrialKey('ominous_trial_key', 720, 'End Ship Key')
    },
    toxic_lair: {
        basic: CustomTrialKey('trial_key', 722, 'Toxic Key'),
        boss: CustomTrialKey('ominous_trial_key', 723, 'Toxic Boss Key'),
        ominous: CustomTrialKey('ominous_trial_key', 712, 'Ominous Toxic Key')
    }
}