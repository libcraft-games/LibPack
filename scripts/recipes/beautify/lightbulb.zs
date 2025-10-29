import crafttweaker.api.ingredient.type.IIngredientEmpty;
import crafttweaker.api.ingredient.IIngredient;

<recipetype:minecraft:crafting>.removeByName("beautify:lamp_light_bulb");

val __ = IIngredientEmpty.getInstance();
val lb = <item:immersiveengineering:light_bulb>;
val ni = <tag:item:c:ingots/iron>;
val lv = <item:minecraft:lever>;

craftingTable.addShaped(
  "libcraft/beautify/light_bulb", 
  <item:beautify:lamp_light_bulb>,
  [
    [ __, lb, __ ],
    [ ni, lv, ni ]
  ]);
    
craftingTable.removeByName("beautify:lamp_bamboo");

val st = <tag:item:c:strings>;
val ll = <item:beautify:lamp_light_bulb>;
val bb = <item:minecraft:bamboo>;

craftingTable.addShaped(
  "libcraft/beautify/bamboo_lamp_from_lamp",
  <item:beautify:lamp_bamboo>,
  [
    [ __, st, __ ],
    [ bb, ll, bb ]
  ]);

craftingTable.addShaped(
  "libcraft/beautify/bamboo_lamp_raw",
  <item:beautify:lamp_bamboo>,
  [
    [ __, st, __ ],
    [ bb, lb, bb ],
    [ ni, lv, ni ]
  ]);