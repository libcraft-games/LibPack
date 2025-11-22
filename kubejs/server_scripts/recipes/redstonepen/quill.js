ServerEvents.recipes(e => {
    let rp = 'redstonepen', mc = 'minecraft'
    let quill = `${rp}:quill`
    e.remove({output: quill})
    e.shapeless(quill,
        ['#c:feathers', '#c:dusts/redstone']
    )
    console.log(`applied all changes successfully!`);
});