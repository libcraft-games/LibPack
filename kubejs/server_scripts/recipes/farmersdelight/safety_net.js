ServerEvents.recipes(e => {
    let fd = 'farmersdelight', su = 'supplementaries'
    let safety_net = `${fd}:safety_net`

    e.remove({output: safety_net})
    e.shaped(safety_net,
        [
            'RR',
            'RR'
        ],
        {
            R: '#c:ropes'
        }
    )
    e.shapeless(`4x ${su}:rope`, [safety_net])

    console.log(`applied all changes successfully!`);
});