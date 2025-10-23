import crafttweaker.api.ingredient.type.IIngredientEmpty;
import crafttweaker.api.ingredient.IIngredient;

<recipetype:minecraft:crafting>.removeByName("sophisticatedbackpacks:upgrade_base");
craftingTable.addShaped("libcraft/sophisticatedbackpacks/upgrade_base", <item:sophisticatedbackpacks:upgrade_base>, [
    [<tag:item:c:strings>, <tag:item:c:leathers>, <tag:item:c:strings>],
    [<tag:item:c:ingots/iron>, <item:minecraft:redstone>, <tag:item:c:ingots/iron>],
    [<tag:item:c:strings>, <tag:item:c:leathers>, <tag:item:c:strings>]]);