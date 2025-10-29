import crafttweaker.api.ingredient.type.IIngredientEmpty;
import crafttweaker.api.ingredient.IIngredient;
import crafttweaker.api.recipe.MirrorAxis;

// note: these items are not unified bc they each have unique behavior on right-click and stuff

// add some rope-like items to the ropes tag
<tag:item:c:ropes>.add([
  <item:beautify:rope>,
  <item:immersiveengineering:wirecoil_structure_rope>
]);

// use only the recipe that uses ropes
<recipetype:minecraft:crafting>.removeByName("comforts:rope_and_nail");

// use ropes tag instead of just FD rope
// uncrafting means this can convert straw into hemp fiber, but idrc
<recipetype:minecraft:crafting>.removeByName("farmersdelight:safety_net");
craftingTable.addShaped("ctgui/new/farmersdelight/safety_net_0", <item:farmersdelight:safety_net>, [
    [<tag:item:c:ropes>, <tag:item:c:ropes>],
    [<tag:item:c:ropes>, <tag:item:c:ropes>]]);

// make Supplementaries rope use hemp instead of string. make Beautify rope just a convertible variant thereof.
<recipetype:minecraft:crafting>.removeByName("beautify:rope");
<recipetype:minecraft:crafting>.removeByName("supplementaries:rope_2");

val _ = IIngredientEmpty.getInstance();
val h = <item:immersiveengineering:hemp_fiber>;

craftingTable.addShapedMirrored(
  "libcraft/supplementaries/rope_from_hemp", 
  MirrorAxis.ALL,
  <item:supplementaries:rope>, 
  [
    [_, _, h],
    [_, h, _],
    [h, _, _]
  ]);
  
craftingTable.addShapeless(
  "libcraft/beautify/rope_from_supplementaries",
  <item:beautify:rope>,
  [<item:supplementaries:rope>]);
  
craftingTable.addShapeless(
  "libcraft/supplementaries/rope_from_beautify",
  <item:supplementaries:rope>,
  [<item:beautify:rope>]);