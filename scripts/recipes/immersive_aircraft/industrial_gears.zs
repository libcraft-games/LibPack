import crafttweaker.api.ingredient.type.IIngredientEmpty;
import crafttweaker.api.ingredient.IIngredient;

<recipetype:minecraft:crafting>.removeByName("immersive_aircraft:industrial_gears");
craftingTable.addShaped("libcraft/immersive_aircraft/industrial_gears", <item:immersive_aircraft:industrial_gears>, [
    [IIngredientEmpty.getInstance(), <tag:item:c:plates/constantan>, <tag:item:c:plates/constantan>],
    [<tag:item:c:plates/aluminum>, <item:create:shaft>, <tag:item:c:plates/constantan>],
    [<tag:item:c:plates/aluminum>, <tag:item:c:plates/aluminum>, IIngredientEmpty.getInstance()]]);