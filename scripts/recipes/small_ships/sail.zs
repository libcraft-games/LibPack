import crafttweaker.api.ingredient.type.IIngredientEmpty;
import crafttweaker.api.ingredient.IIngredient;

<recipetype:minecraft:crafting>.removeByName("smallships:sail");
craftingTable.addShaped("libcraft/smallships/sail", <item:smallships:sail>, [
    [<tag:item:minecraft:wooden_fences>, <tag:item:minecraft:wooden_fences>, <tag:item:minecraft:wooden_fences>],
    [<item:immersiveengineering:windmill_sail>, <tag:item:minecraft:wooden_fences>, <item:immersiveengineering:windmill_sail>],
    [<tag:item:c:ropes>, <tag:item:minecraft:wooden_fences>, <tag:item:c:ropes>]]);