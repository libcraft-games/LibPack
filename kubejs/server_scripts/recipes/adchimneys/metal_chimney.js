ServerEvents.recipes(e => {
    let adc = 'adchimneys'
    let chimney = `${adc}:metal_chimney`
    e.remove({output: chimney})
    e.shaped(
        `4x ${chimney}`,
        [
            'pPp',
            ' P '
        ],
        {
            p: '#c:plates/iron',
            P: `${adc}:pipe`
        }
    )
    console.log(`applied all changes successfully!`);
});