import crafttweaker.api.ingredient.type.IIngredientEmpty;
import crafttweaker.api.ingredient.IIngredient;

<recipetype:minecraft:crafting>.removeByName("immersive_aircraft:steel_boiler");
craftingTable.addShaped("libcraft/immersive_aircraft/steel_boiler", <item:immersive_aircraft:steel_boiler>, [
    [<tag:item:c:plates/steel>, <tag:item:c:plates/steel>, <tag:item:c:plates/steel>],
    [<tag:item:c:plates/steel>, IIngredientEmpty.getInstance(), <tag:item:c:plates/steel>],
    [<tag:item:c:plates/steel>, <item:minecraft:blast_furnace>, <tag:item:c:plates/steel>]]);