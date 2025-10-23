import crafttweaker.api.ingredient.type.IIngredientEmpty;

<recipetype:minecraft:crafting>.removeByName("notenoughwands:building_wand");
craftingTable.addShaped("ctgui/new/notenoughwands/building_wand_0", <item:notenoughwands:building_wand>, [
    [<item:minecraft:ender_eye>, <tag:item:chipped:bricks>, IIngredientEmpty.getInstance()],
    [<tag:item:chipped:bricks>, <item:createaddition:electrum_rod>, IIngredientEmpty.getInstance()],
    [IIngredientEmpty.getInstance(), IIngredientEmpty.getInstance(), <item:createaddition:electrum_rod>]]);

<recipetype:minecraft:crafting>.removeByName("notenoughwands:swapping_wand");
craftingTable.addShaped("ctgui/new/notenoughwands/swapping_wand_0", <item:notenoughwands:swapping_wand>, [
    [<item:minecraft:ender_eye>, <item:biomesoplenty:rose_quartz_chunk>, IIngredientEmpty.getInstance()],
    [<item:biomesoplenty:rose_quartz_chunk>, <item:createaddition:electrum_rod>, IIngredientEmpty.getInstance()],
    [IIngredientEmpty.getInstance(), IIngredientEmpty.getInstance(), <item:createaddition:electrum_rod>]]);