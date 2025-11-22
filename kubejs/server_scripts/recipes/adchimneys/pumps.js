ServerEvents.recipes(e => {
    let adc = 'adchimneys'
    function registerPumpOf(material) {
        let pump = `${adc}:${material}_pump`
        e.remove({output: pump})
        e.shaped(
            pump,
            [
                'F',
                'V',
                'P'
            ],
            {
                F: 'create:propeller',
                P: `${adc}:pipe`,
                V: `${adc}:${material}_vent`
            }
        )
    }
    registerPumpOf('stone')
    registerPumpOf('metal')
    console.log(`applied all changes successfully!`);
});