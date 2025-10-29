import crafttweaker.api.ingredient.type.IIngredientEmpty;
import crafttweaker.api.ingredient.IIngredient;

val colors = ["white", 
               "light_gray", 
               "gray",
               "black",
               "brown",
               "red",
               "orange",
               "yellow",
               "lime",
               "green",
               "cyan",
               "light_blue",
               "blue",
               "purple",
               "magenta",
               "pink"] as string[];

val s  = <tag:item:c:rods/wooden>;
val f = <item:immersiveengineering:hemp_fabric>;

craftingTable.addShaped(
  "libcraft/supplementaries/awning_from_tough_fabric",
  <item:supplementaries:awning>, 
  [
    [ s, f, s ]
  ]);

for color in colors {
  <recipetype:minecraft:crafting>.removeByName("supplementaries:awnings/awning_" + color + "_2");
  
  // <tag:item:c:dyes/${color}>; // ${} does not appear to work for tags??
  val dye = <tagmanager:item>.tag("c:dyes/" + color);
  craftingTable.addShapeless(
    "libcraft/supplementaries/" + color + "_awning_from_dye", 
    <item:supplementaries:awning_${color}>, 
    [<item:supplementaries:awning>, dye]);
  
  val c = <tagmanager:item>.tag("chipped:" + color + "_carpet");
  
  craftingTable.addShaped(
    "libcraft/supplementaries/" + color + "_awning_from_carpet",
    <item:supplementaries:awning_${color}>,
    [
      [ s, c, s ]
    ]);
}


