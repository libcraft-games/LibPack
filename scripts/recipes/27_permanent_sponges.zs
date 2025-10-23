import crafttweaker.api.ingredient.type.IIngredientEmpty;
import crafttweaker.api.ingredient.IIngredient;

<recipetype:minecraft:crafting>.removeByName("permanentsponges:magmatic_sponge");
craftingTable.addShaped("ctgui/new/permanentsponges/magmatic_sponge_0", <item:permanentsponges:magmatic_sponge>, [
    [<item:minecraft:sponge>, <item:minecraft:sponge>, <item:minecraft:sponge>],
    [<item:minecraft:sponge>, <item:create:blaze_cake>, <item:minecraft:sponge>],
    [<item:minecraft:sponge>, <item:minecraft:sponge>, <item:minecraft:sponge>]]);

<recipetype:minecraft:crafting>.removeByName("permanentsponges:aqueous_sponge");
craftingTable.addShaped("ctgui/new/permanentsponges/aqueous_sponge_0", <item:permanentsponges:aqueous_sponge>, [
    [<item:minecraft:sponge>, <item:minecraft:sponge>, <item:minecraft:sponge>],
    [<item:minecraft:sponge>, <item:minecraft:heart_of_the_sea>, <item:minecraft:sponge>],
    [<item:minecraft:sponge>, <item:minecraft:sponge>, <item:minecraft:sponge>]]);