import crafttweaker.api.ingredient.type.IIngredientEmpty;
import crafttweaker.api.ingredient.IIngredient;

val woods = ["oak", "spruce", "birch", "jungle", "acacia", "cherry", "dark_oak", "mangrove", "bamboo"] as string[];

for wood in woods {
  <recipetype:minecraft:crafting>.removeByName("smallships:" + wood + "_cog");
  var boat = "boat";
  if(wood == "bamboo") {
    boat = "raft";
  }
  craftingTable.addShaped("libcraft/smallships/" + wood + "_cog", <item:smallships:${wood}_cog>, [
      [<tag:item:c:ropes>, <item:smallships:sail>, <tag:item:c:ropes>],
      [<item:minecraft:${wood}_${boat}>, <item:minecraft:${wood}_${boat}>, <item:minecraft:${wood}_${boat}>]]);
}