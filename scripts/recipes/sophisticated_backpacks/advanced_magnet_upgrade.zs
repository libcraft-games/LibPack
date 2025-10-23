import crafttweaker.api.ingredient.type.IIngredientEmpty;
import crafttweaker.api.ingredient.IIngredient;

val d  = <tag:item:c:gems/diamond>;
val ec = <item:immersiveengineering:component_electronic>;
val ep = <tag:item:c:ender_pearls>;
val gp = <tag:item:c:plates/gold>;
val ii = <tag:item:c:ingots/iron>;
val mt = <item:twilightforest:ore_magnet> | <item:artifacts:universal_attractor> | <item:immersiveengineering:toolupgrade_powerpack_magnet>;
// `<tag:libcraft_custom_groups/magnets/portable>;` doesn't work for some reason
val pu = <item:sophisticatedbackpacks:advanced_pickup_upgrade>;
val mu = <item:sophisticatedbackpacks:magnet_upgrade>;
val pm = <item:create:precision_mechanism>;
val rd = <tag:item:c:dusts/redstone>;

<recipetype:minecraft:crafting>.removeByName("sophisticatedbackpacks:advanced_magnet_upgrade_from_basic");
<recipetype:minecraft:crafting>.removeByName("sophisticatedbackpacks:advanced_magnet_upgrade");

craftingTable.addShaped("libcraft/sophisticatedbackpacks/advanced_magnet_upgrade_from_magnet", 
  <item:sophisticatedbackpacks:advanced_magnet_upgrade>, 
  [
    [ gp, ec, gp ],
    [ ii, mu, ii ],
    [ gp, d,  gp ],
  ]
);

craftingTable.addShaped("libcraft/sophisticatedbackpacks/advanced_magnet_upgrade_from_pickup", 
  <item:sophisticatedbackpacks:advanced_magnet_upgrade>, 
  [
    [ ep, ii, ep ],
    [ ii, pu, ii ],
    [ rd, mt, rd ]
  ]
);