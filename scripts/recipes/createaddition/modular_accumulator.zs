import crafttweaker.api.ingredient.type.IIngredientEmpty;
val __ = IIngredientEmpty.getInstance();
val bc = <item:create:brass_casing>;
val bp = <tag:item:c:plates/brass>;
val ct = <item:immersiveengineering:current_transformer>;
val db = <item:immersiveengineering:duroplast>;
val fg = <item:create:factory_gauge>;
val ha = <item:immersiveengineering:capacitor_hv>;
val hc = <item:immersiveengineering:connector_hv>;
val ht = <item:immersiveengineering:transformer_hv>;
val lc = <item:immersiveengineering:connector_lv>;
val mc = <item:immersiveengineering:connector_mv>;
val tf = <item:immersiveengineering:transformer>;

<recipetype:minecraft:crafting>.removeByName("createaddition:crafting/modular_accumulator");

craftingTable.addShaped("libcraft/create/mechanical_crafting/modular_accumulator", 
  <item:createaddition:modular_accumulator>, 
  [
    [__, bp, fg, bp, __],
    [bp, db, ct, db, bp],
    [lc, tf, bc, ht, hc],
    [bp, db, ha, db, bp],
    [__, bp, mc, bp, __]
  ]
);