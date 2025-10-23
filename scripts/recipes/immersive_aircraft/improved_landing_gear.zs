import crafttweaker.api.ingredient.type.IIngredientEmpty;
import crafttweaker.api.ingredient.IIngredient;

<recipetype:minecraft:crafting>.removeByName("immersive_aircraft:improved_landing_gear");
craftingTable.addShaped("libcraft/immersive_aircraft/improved_landing_gear", <item:immersive_aircraft:improved_landing_gear>, [
    [<item:immersiveengineering:dust_coke>, <item:immersiveengineering:ersatz_leather>, <item:immersiveengineering:treated_wallmount>],
    [<item:immersiveengineering:ersatz_leather>, <item:create:shaft>, <item:immersiveengineering:ersatz_leather>],
    [<item:immersiveengineering:dust_coke>, <item:immersiveengineering:ersatz_leather>, <item:immersiveengineering:dust_coke>]]);