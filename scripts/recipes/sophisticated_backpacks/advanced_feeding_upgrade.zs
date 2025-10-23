import crafttweaker.api.ingredient.type.IIngredientEmpty;
import crafttweaker.api.ingredient.IIngredient;

val gp = <tag:item:c:plates/gold>;
val gg = <item:aether:golden_gummy_swet>;
val fu = <item:sophisticatedbackpacks:feeding_upgrade>;
val ec = <item:immersiveengineering:component_electronic_adv>;
val e115 = <item:twilightforest:experiment_115>;
val slop = <item:undergarden:slop_bowl>;

<recipetype:minecraft:crafting>.removeByName("sophisticatedbackpacks:advanced_feeding_upgrade");

craftingTable.addShaped(
  "libcraft/sophisticatedbackpacks/advanced_feeding_upgrade", 
  <item:sophisticatedbackpacks:advanced_feeding_upgrade>, 
  [
    [ gp,   ec, gp ],
    [ e115, fu, gg ],
    [ gp, slop, gp ]    
  ]
);