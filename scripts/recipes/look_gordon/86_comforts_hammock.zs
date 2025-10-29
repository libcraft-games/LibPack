// run after ropes!.zs
#priority 9
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

val _ = IIngredientEmpty.getInstance();
val r = <tag:item:c:ropes>;
val s = <tag:item:c:rods/wooden>;

for color in colors {
  <recipetype:minecraft:crafting>.removeByName("comforts:hammock_" + color);
  
  val w = <item:minecraft:${color}_wool>;

  craftingTable.addShaped(
    "libcraft/comforts/hammock_" + color,
    <item:comforts:hammock_${color}>,
    [
      [ _, s, _ ],
      [ r, w, r ],
      [ _, s, _ ]
    ]);
}