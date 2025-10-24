craftingTable.removeByName("immersiveengineering:crafting/empty_casing");

<recipetype:immersiveengineering:blueprint>.addJsonRecipe("libcraft/immersiveengineering/blueprint/bullet_casing", {type: "immersiveengineering:blueprint", category: "bullet", result: {id: "immersiveengineering:empty_casing", count: 3}, inputs: [{tag: "c:plates/brass"}]});

<recipetype:immersiveengineering:metal_press>.removeByName("immersiveengineering:metalpress/bullet_casing");

<recipetype:immersiveengineering:metal_press>.addJsonRecipe("libcraft/immersiveengineering/metalpress/bullet_casing", {type: "immersiveengineering:metal_press", energy: 2400, mold: "immersiveengineering:mold_bullet_casing", input: {tag: "c:plates/brass"}, result: {id: "immersiveengineering:empty_casing", count: 4}});