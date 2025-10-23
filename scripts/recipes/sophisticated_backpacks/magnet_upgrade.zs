import crafttweaker.api.ingredient.type.IIngredientEmpty;
import crafttweaker.api.ingredient.IIngredient;

val p = <tag:item:c:ender_pearls>;
val i = <tag:item:c:ingots/iron>;
val b = <item:sophisticatedbackpacks:pickup_upgrade>;
val r = <tag:item:c:dusts/redstone>;
val m = <item:twilightforest:ore_magnet> | <item:artifacts:universal_attractor> | <item:immersiveengineering:toolupgrade_powerpack_magnet>;
// `<tag:libcraft_custom_groups/magnets/portable>;` doesn't work for some reason

<recipetype:minecraft:crafting>.removeByName("sophisticatedbackpacks:magnet_upgrade");

craftingTable.addShaped("libcraft/sophisticatedbackpacks/magnet_upgrade", 
  <item:sophisticatedbackpacks:magnet_upgrade>, 
  [
    [ p, i, p ],
    [ i, b, i ],
    [ r, m, r ]
  ]
);