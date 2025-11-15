

ServerEvents.recipes(e => {
    // remove only the recipe that uses string
    // todo: filter by inputs
    e.remove({id: 'comforts:rope_and_nail'})
    console.log(`applied all changes successfully!`);
});