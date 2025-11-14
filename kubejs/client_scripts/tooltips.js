ItemEvents.modifyTooltips(e => {
    e.modify(
        'sophisticatedbackpacks:anvil_upgrade',
        // really cool how the docs are wrong and this type isn't documented outside the code
        // https://github.com/KubeJS-Mods/KubeJS/blob/8ac33b2972f22fc7e0647b0cc502c79f900b99e0/src/main/java/dev/latvian/mods/kubejs/text/action/TextActionBuilder.java,
        // by the way.
        x => {
            x.insert(1, Text.red('Uses vanilla anvil mechanics, not the improved ones!'))
        }
    )
})