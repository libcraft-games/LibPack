import crafttweaker.api.ingredient.type.IIngredientEmpty;
import crafttweaker.api.ingredient.IIngredient;

<recipetype:minecraft:crafting>.removeByName("immersive_aircraft:gyrodyne");
craftingTable.addShaped("libcraft/immersive_aircraft/gyrodyne", <item:immersive_aircraft:gyrodyne>, [
    [IIngredientEmpty.getInstance(), <item:immersive_aircraft:propeller>, IIngredientEmpty.getInstance()],
    [IIngredientEmpty.getInstance(), <item:petrolsparts:planetary_gearset>, IIngredientEmpty.getInstance()],
    [<item:immersiveengineering:windmill_sail>, <item:immersive_aircraft:hull>, <item:immersiveengineering:windmill_sail>]]);