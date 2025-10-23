import crafttweaker.api.ingredient.type.IIngredientEmpty;
import crafttweaker.api.ingredient.IIngredient;

<recipetype:minecraft:crafting>.removeByName("sophisticatedbackpacks:pickup_upgrade");
craftingTable.addShaped("libcraft/sophisticatedbackpacks/pickup_upgrade", <item:sophisticatedbackpacks:pickup_upgrade>, [
    [IIngredientEmpty.getInstance(), <item:minecraft:sticky_piston>, IIngredientEmpty.getInstance()],
    [<item:minecraft:redstone>, <item:sophisticatedbackpacks:upgrade_base>, <item:minecraft:redstone>],
    [IIngredientEmpty.getInstance(), <item:minecraft:hopper>, IIngredientEmpty.getInstance()]]);