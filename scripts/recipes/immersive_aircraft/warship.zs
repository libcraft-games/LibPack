import crafttweaker.api.ingredient.type.IIngredientEmpty;
import crafttweaker.api.ingredient.IIngredient;

<recipetype:minecraft:crafting>.removeByName("immersive_aircraft:warship");
craftingTable.addShaped("libcraft/immersive_aircraft/warship", <item:immersive_aircraft:warship>, [
    [<item:immersiveengineering:cushion>, <item:immersiveengineering:windmill_sail>, <item:immersiveengineering:cushion>],
    [<item:immersive_aircraft:engine>, <item:immersive_aircraft:cargo_airship>, <item:immersive_aircraft:engine>],
    [<tag:item:c:plates/steel>, <tag:item:c:glass_panes>, <item:immersive_aircraft:heavy_crossbow>]]);