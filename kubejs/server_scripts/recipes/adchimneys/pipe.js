ServerEvents.recipes(e => {
    let adc = 'adchimneys'
    let item = `${adc}:pipe`
    e.remove({output: item})
    e.shaped(
        `8x ${item}`,
        [
            'P',
            'P',
            'P'
        ],
        {
            P: '#c:plates/iron'
        }
    )
    console.log(`applied all changes successfully!`);
});