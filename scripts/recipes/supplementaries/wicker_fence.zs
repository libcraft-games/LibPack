import crafttweaker.api.ingredient.type.IIngredientEmpty;
import crafttweaker.api.ingredient.IIngredient;

val s  = <tag:item:c:rods/wooden>;

<recipetype:minecraft:crafting>.removeByName("supplementaries:wicker_fence");

craftingTable.addShaped("libcraft/supplementaries/wicker_fence_from_sticks", 
  <item:supplementaries:wicker_fence> * 4,
  [
    [ s, s, s ],
    [ s, s, s ]
  ]
);