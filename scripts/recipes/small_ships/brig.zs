import crafttweaker.api.ingredient.type.IIngredientEmpty;
import crafttweaker.api.ingredient.IIngredient;

val woods = ["oak", "spruce", "birch", "jungle", "acacia", "cherry", "dark_oak", "mangrove", "bamboo"] as string[];

for wood in woods {
  <recipetype:minecraft:crafting>.removeByName("smallships:" + wood + "_brigg");
  var boat = "boat";
  if(wood == "bamboo") {
    boat = "raft";
  }
  craftingTable.addShaped("libcraft/smallships/" + wood + "_brigg", <item:smallships:${wood}_brigg>, [
    [<item:smallships:sail>, <tag:item:c:ropes>, <item:smallships:sail>],
    [<tag:item:c:ropes>, <item:immersiveengineering:component_iron>, <tag:item:c:ropes>],
    [<item:minecraft:${wood}_chest_${boat}>, <item:minecraft:${wood}_chest_${boat}>, <item:minecraft:${wood}_chest_${boat}>]]);
}