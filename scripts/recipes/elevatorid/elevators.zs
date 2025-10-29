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

val e = <item:minecraft:end_stone>;
val a = <item:enderscape:alluring_magnia_sprout>;
val r = <item:enderscape:repulsive_magnia_sprout>;
val l = <item:supplementaries:lumisene_bucket>;

for color in colors {
  <recipetype:minecraft:crafting>.removeByName("elevatorid:elevator_" + color);
  val w = <item:minecraft:${color}_wool>;
  craftingTable.addShaped(
    "libcraft/elevators/elevator_" + color, 
    <item:elevatorid:elevator_${color}>, 
    [
      [ w, a, w ],
      [ e, l, e ],
      [ w, r, w ]
    ]);
}