import crafttweaker.api.ingredient.type.IIngredientEmpty;
import crafttweaker.api.ingredient.IIngredient;

val ss = <item:create:sturdy_sheet>;
val fn = <item:undergarden:forgotten_nugget>;
val sl = <item:twilightforest:steeleaf_ingot>;
val en = <item:immersive_aircraft:engine>;
val up = <tag:item:c:plates/uranium>;
val sc = <item:minecraft:calibrated_sculk_sensor>;

<recipetype:minecraft:crafting>.removeByName("immersive_aircraft:eco_engine");

craftingTable.addShaped(
  "libcraft/immersive_aircraft/eco_engine", 
  <item:immersive_aircraft:eco_engine>, 
  [
    [ ss, fn, ss ],
    [ sl, en, sl ],
    [ up, sc, up ]
  ]
);