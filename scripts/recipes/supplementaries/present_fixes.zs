// present from paper
<recipetype:minecraft:crafting>.removeByName("supplementaries:present"); 
// (present from cardboard already exists)

// present from paper + tripwire hook (bugged for trapped present?)
<recipetype:minecraft:crafting>.removeByName("supplementaries:trapped_present_2");
// present from paper + tripwire hook (bugged for trapped present from cardboard?)
<recipetype:minecraft:crafting>.removeByName("supplementaries:trapped_present_3");

val c = <tag:item:c:plates/cardboard>;
val t = <item:minecraft:tripwire_hook>;
craftingTable.addShaped(
    "libcraft/supplementaries/trapped_present_from_cardboard", 
    <item:supplementaries:trapped_present>, 
    [
      [ c, c, c ],
      [ c, t, c ],
      [ c, c, c ]
    ]);