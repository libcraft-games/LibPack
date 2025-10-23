import crafttweaker.api.ingredient.type.IIngredientEmpty;
import crafttweaker.api.ingredient.IIngredient;

<recipetype:minecraft:crafting>.removeByName("sophisticatedbackpacks:advanced_pickup_upgrade");
craftingTable.addShaped("libcraft/sophisticatedbackpacks/advanced_pickup_upgrade", <item:sophisticatedbackpacks:advanced_pickup_upgrade>, [
    [<tag:item:c:plates/gold>, <item:immersiveengineering:component_electronic>, <tag:item:c:plates/gold>],
    [<tag:item:c:ingots/iron>, <item:sophisticatedbackpacks:pickup_upgrade>, <tag:item:c:ingots/iron>],
    [<tag:item:c:plates/gold>, <tag:item:c:gems/diamond>, <tag:item:c:plates/gold>]]);