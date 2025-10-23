import crafttweaker.api.ingredient.type.IIngredientEmpty;
import crafttweaker.api.ingredient.IIngredient;

<recipetype:minecraft:crafting>.removeByName("immersive_aircraft:airship");
craftingTable.addShaped("libcraft/immersive_aircraft/airship", <item:immersive_aircraft:airship>, [
    [<item:immersiveengineering:windmill_sail>, <item:immersiveengineering:cushion>, <item:immersiveengineering:windmill_sail>],
    [<item:immersiveengineering:cushion>, <tag:item:c:ropes>, <item:immersiveengineering:cushion>],
    [<item:immersive_aircraft:propeller>, <item:immersive_aircraft:engine>, <tag:item:minecraft:boats>]]);