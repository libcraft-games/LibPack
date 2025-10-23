import crafttweaker.api.ingredient.type.IIngredientEmpty;
import crafttweaker.api.ingredient.IIngredient;

<recipetype:minecraft:crafting>.removeByName("exposure_polaroid:instant_camera");
craftingTable.addShaped("ctgui/new/exposure_polaroid/instant_camera_0", <item:exposure_polaroid:instant_camera>, [
    [IIngredientEmpty.getInstance(), <item:immersiveengineering:plate_duroplast>, IIngredientEmpty.getInstance()],
    [<tag:item:minecraft:buttons>, <tag:item:c:glass_panes/colorless>, <item:immersiveengineering:toolupgrade_shield_flash>],
    [<item:immersiveengineering:plate_duroplast>, <item:exposure:lightroom>, <item:immersiveengineering:plate_duroplast>]]);