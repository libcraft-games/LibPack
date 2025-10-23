import crafttweaker.api.ingredient.type.IIngredientEmpty;
import crafttweaker.api.ingredient.IIngredient;

<recipetype:minecraft:crafting>.removeByName("immersive_aircraft:hull");
craftingTable.addShaped("libcraft/immersive_aircraft/hull", <item:immersive_aircraft:hull>, [
    [<item:immersiveengineering:treated_scaffold>, <item:immersiveengineering:treated_scaffold>, <item:immersiveengineering:treated_scaffold>],
    [<tag:item:c:plates/aluminum>, <tag:item:c:plates/aluminum>, <tag:item:c:plates/aluminum>],
    [<item:immersiveengineering:treated_scaffold>, <item:immersiveengineering:treated_scaffold>, <item:immersiveengineering:treated_scaffold>]]);