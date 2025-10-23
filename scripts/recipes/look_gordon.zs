import crafttweaker.api.ingredient.type.IIngredientEmpty;
import crafttweaker.api.ingredient.IIngredient;

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

// make Beautify rope use hemp instead of string
<recipetype:minecraft:crafting>.removeByName("beautify:rope");
craftingTable.addShaped("ctgui/new/beautify/rope_0", <item:beautify:rope>, [
    [<item:immersiveengineering:hemp_fiber>],
    [<item:immersiveengineering:hemp_fiber>],
    [<item:immersiveengineering:hemp_fiber>]]);