import crafttweaker.api.ingredient.type.IIngredientEmpty;
import crafttweaker.api.ingredient.IIngredient;

val gp = <tag:item:c:glass_panes/colorless>;
val nt = <item:create:nixie_tube>;
val ep = <tag:item:c:plates/electrum>;
val ec = <item:immersiveengineering:component_electronic_adv>;
val nb = <item:minecraft:note_block>;
val g1 = <item:immersive_aircraft:gyroscope>;
val g2 = <item:immersive_aircraft:gyroscope_dials>;
val at = <item:supplementaries:altimeter>;
val __ = IIngredientEmpty.getInstance();

<recipetype:minecraft:crafting>.removeByName("immersive_aircraft:gyroscope_hud");

craftingTable.addShaped(
  "libcraft/immersive_aircraft/gyroscope_hud", 
  <item:immersive_aircraft:gyroscope_hud>, 
  [
    [__, gp, nt ],
    [ep, ec, ep ],
    [nb, g1, at ]
  ]
);

craftingTable.addShaped(
  "libcraft/immersive_aircraft/gyroscope_hud_upgrade", 
  <item:immersive_aircraft:gyroscope_hud>, 
  [
    [__, gp, nt ],
    [ep, ec, ep ],
    [__, g2, __ ]
  ]
);