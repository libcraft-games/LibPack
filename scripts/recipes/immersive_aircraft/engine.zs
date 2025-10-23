import crafttweaker.api.ingredient.type.IIngredientEmpty;
import crafttweaker.api.ingredient.IIngredient;

val i = <tag:item:c:plates/iron>;
val p = <item:minecraft:piston>;
val c = <item:immersiveengineering:component_iron>;
val b = <item:immersiveengineering:metal_barrel>;
val _ = IIngredientEmpty.getInstance();

<recipetype:minecraft:crafting>.removeByName("immersive_aircraft:engine");
craftingTable.addShaped(
  "libcraft/immersive_aircraft/engine", 
  <item:immersive_aircraft:engine>, 
  [
    [ _, i, _ ],
    [ p, c, p ],
    [ i, b, i ]
  ]);