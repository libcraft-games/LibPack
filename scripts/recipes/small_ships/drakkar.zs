import crafttweaker.api.ingredient.type.IIngredientEmpty;
import crafttweaker.api.ingredient.IIngredient;

val woods = ["oak", "spruce", "birch", "jungle", "acacia", "cherry", "dark_oak", "mangrove", "bamboo"] as string[];

for wood in woods {
  <recipetype:minecraft:crafting>.removeByName("smallships:" + wood + "_drakkar");
  var boat = "boat";
  if(wood == "bamboo") {
    boat = "raft";
  }
  craftingTable.addShaped("libcraft/smallships/" + wood + "_drakkar", <item:smallships:${wood}_drakkar>, [
    [IIngredientEmpty.getInstance(), <tag:item:c:ropes>, IIngredientEmpty.getInstance()],
    [<tag:item:c:ropes>, <item:smallships:sail>, <item:minecraft:oak_stairs>],
    [<item:minecraft:${wood}_chest_${boat}>, <item:minecraft:${wood}_chest_${boat}>, <item:minecraft:${wood}_${boat}>]]);
}