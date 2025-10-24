import crafttweaker.api.ingredient.type.IIngredientEmpty;
import crafttweaker.api.ingredient.IIngredient;

<recipetype:minecraft:crafting>.removeByName("smallships:cannon_ball");
craftingTable.addShaped("libcraft/smallships/cannon_ball", <item:smallships:cannon_ball> * 4, [
    [<tag:item:c:nuggets/lead>, <tag:item:c:ingots/lead>, <tag:item:c:nuggets/lead>],
    [<tag:item:c:ingots/lead>, <item:minecraft:gunpowder>, <tag:item:c:ingots/lead>],
    [<tag:item:c:nuggets/lead>, <tag:item:c:ingots/lead>, <tag:item:c:nuggets/lead>]]);

