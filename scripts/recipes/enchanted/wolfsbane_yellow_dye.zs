import crafttweaker.api.ingredient.type.IIngredientEmpty;
import crafttweaker.api.ingredient.IIngredient;

<recipetype:create:milling>.addJsonRecipe("libcraft/create/milling/wolfsbane", {type: "create:milling", processing_time: 50, results: [{id: "minecraft:yellow_dye", count: 1}, {id: "minecraft:yellow_dye", chance: 0.85}, {id: "enchanted:wolfsbane_seeds", chance: 0.05}], ingredients: [{item: "enchanted:wolfsbane_flower"}]});

craftingTable.addShapeless("libcraft/crafting/yellow_dye_from_wolfsbane", <item:minecraft:yellow_dye>, [<item:enchanted:wolfsbane_flower>]);

<recipetype:farmersdelight:cutting>.addRecipe("libcraft/farmersdelight/cutting/wolfsbane", <item:enchanted:wolfsbane_flower>, [(<item:minecraft:yellow_dye> * 2)], <tag:item:c:tools/knife>);