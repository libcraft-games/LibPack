let file = 'recipes/_misc/unification/rope.js'

let ie = 'immersiveengineering'
let b_rope = 'beautify:rope'
let s_rope = 'supplementaries:rope'

ServerEvents.recipes(e => {
    e.remove({output: b_rope});
    e.remove({output: s_rope});
    // craft from just hemp
    e.shaped(
        Item.of('supplementaries:rope'),
        [
            ' HH',
            'HHH',
            'HH '
        ],
        {
            H: `${ie}:hemp_fiber`
        }
    );
    e.shapeless(b_rope, [s_rope])
    e.shapeless(s_rope, [b_rope])
    console.log(`applied changes from ${file}`);
});