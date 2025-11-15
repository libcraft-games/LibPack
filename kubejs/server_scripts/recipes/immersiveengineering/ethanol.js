

let ie = 'immersiveengineering'

ServerEvents.recipes(e => {
    e.custom({
        type: `${ie}:fermenter`,
        energy: 6400,
        input: {item: 'culturaldelights:corn_kernels'},
        fluid: {id: `${ie}:ethanol`, amount: 50}
    })
    console.log(`applied all changes successfully!`);
}); 