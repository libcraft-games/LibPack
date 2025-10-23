import crafttweaker.api.ingredient.type.IIngredientEmpty;
import crafttweaker.api.ingredient.IIngredient;

<recipetype:minecraft:crafting>.removeByName("immersive_aircraft:gyroscope_dials");
craftingTable.addShaped("libcraft/immersive_aircraft/gyroscope_dials", <item:immersive_aircraft:gyroscope_dials>, [
    [IIngredientEmpty.getInstance(), <item:supplementaries:altimeter>, <item:create:precision_mechanism>],
    [<item:minecraft:note_block>, <item:immersive_aircraft:gyroscope>, <item:minecraft:lever>]]);