let file = 'recipes/farmersdelight/safety_net.js'

let fd = 'farmersdelight'
let safety_net = `${fd}:safety_net`

// use ropes tag instead of just FD rope
// uncrafting means this can convert straw into hemp fiber, but idrc
ServerEvents.recipes(e => {
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
    console.log(`applied changes from ${file}`);
});