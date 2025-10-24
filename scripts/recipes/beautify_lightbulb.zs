import crafttweaker.api.ingredient.type.IIngredientEmpty;
import crafttweaker.api.ingredient.IIngredient;

<recipetype:minecraft:crafting>.removeByName("beautify:lamp_light_bulb");
craftingTable.addShaped("ctgui/new/beautify/lamp_light_bulb_0", <item:beautify:lamp_light_bulb>, [
    [IIngredientEmpty.getInstance(), IIngredientEmpty.getInstance(), IIngredientEmpty.getInstance()],
    [IIngredientEmpty.getInstance(), <item:immersiveengineering:light_bulb>, IIngredientEmpty.getInstance()],
    [<item:minecraft:iron_nugget>, <item:minecraft:lever>, <item:minecraft:iron_nugget>]]);

