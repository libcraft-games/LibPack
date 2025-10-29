// run after ropes!.zs
#priority 9
import crafttweaker.api.ingredient.type.IIngredientEmpty;
import crafttweaker.api.ingredient.IIngredient;

<recipetype:minecraft:crafting>.removeByName("create:crafting/kinetics/rope_pulley");

craftingTable.addShaped(
  "libcraft/create/rope_pulley",
  <item:create:rope_pulley>, 
  [
    [ <item:create:andesite_casing> ],
    [ <tag:item:c:ropes> ],
    [ <tag:item:c:plates/iron> ]
  ]);