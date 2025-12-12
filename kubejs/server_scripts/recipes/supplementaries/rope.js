ServerEvents.recipes(e => {
    let ie = 'immersiveengineering'
    let rope = 'supplementaries:rope'
    e.remove({output: rope});
    e.shaped(
        Item.of(rope),
        [
            ' HH',
            'HHH',
            'HH '
        ],
        {
            H: `${ie}:hemp_fiber`
        }
    );
    console.log(`applied all changes successfully!`);
});