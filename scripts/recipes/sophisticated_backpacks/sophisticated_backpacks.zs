import crafttweaker.api.ingredient.type.IIngredientEmpty;
import crafttweaker.api.ingredient.IIngredient;

<recipetype:minecraft:crafting>.removeByName("sophisticatedbackpacks:compacting_upgrade");
craftingTable.addShaped("libcraft/sophisticatedbackpacks/compacting_upgrade", <item:sophisticatedbackpacks:compacting_upgrade>, [
    [<tag:item:c:ingots/iron>, <tag:item:c:dusts/redstone>, <tag:item:c:ingots/iron>],
    [<item:minecraft:piston>, <item:sophisticatedbackpacks:upgrade_base>, <item:minecraft:piston>],
    [<tag:item:c:ingots/iron>, <tag:item:c:dusts/redstone>, <tag:item:c:ingots/iron>]]);

<recipetype:minecraft:crafting>.removeByName("sophisticatedbackpacks:advanced_filter_upgrade");
craftingTable.addShaped("libcraft/sophisticatedbackpacks/advanced_filter_upgrade", <item:sophisticatedbackpacks:advanced_filter_upgrade>, [
    [<tag:item:c:plates/gold>, <item:minecraft:comparator>, <tag:item:c:plates/gold>],
    [<item:minecraft:comparator>, <item:sophisticatedbackpacks:filter_upgrade>, <item:minecraft:comparator>],
    [<tag:item:c:plates/gold>, <item:minecraft:comparator>, <tag:item:c:plates/gold>]]);

<recipetype:minecraft:crafting>.removeByName("sophisticatedbackpacks:advanced_compacting_upgrade");
craftingTable.addShaped("libcraft/sophisticatedbackpacks/advanced_compacting_upgrade", <item:sophisticatedbackpacks:advanced_compacting_upgrade>, [
    [<tag:item:c:plates/gold>, <item:minecraft:piston>, <tag:item:c:plates/gold>],
    [<item:minecraft:iron_block>, <item:sophisticatedbackpacks:compacting_upgrade>, <item:minecraft:iron_block>],
    [<tag:item:c:plates/gold>, <item:minecraft:comparator>, <tag:item:c:plates/gold>]]);

<recipetype:minecraft:crafting>.removeByName("sophisticatedbackpacks:void_upgrade");
craftingTable.addShaped("libcraft/sophisticatedbackpacks/void_upgrade", <item:sophisticatedbackpacks:void_upgrade>, [
    [<tag:item:c:ender_pearls>, <tag:item:c:obsidians>, <tag:item:c:dusts/redstone>],
    [<tag:item:c:obsidians>, <item:sophisticatedbackpacks:filter_upgrade>, <tag:item:c:obsidians>],
    [<tag:item:c:dusts/redstone>, <tag:item:c:obsidians>, <tag:item:c:ender_pearls>]]);

<recipetype:minecraft:crafting>.removeByName("sophisticatedbackpacks:advanced_void_upgrade");
craftingTable.addShaped("libcraft/sophisticatedbackpacks/advanced_void_upgrade", <item:sophisticatedbackpacks:advanced_void_upgrade>, [
    [<tag:item:c:plates/gold>, <item:minecraft:comparator>, <tag:item:c:plates/gold>],
    [<item:minecraft:end_stone>, <item:sophisticatedbackpacks:void_upgrade>, <item:minecraft:end_stone>],
    [<tag:item:c:plates/gold>, <tag:item:c:gems/diamond>, <tag:item:c:plates/gold>]]);

<recipetype:minecraft:crafting>.removeByName("sophisticatedbackpacks:everlasting_upgrade");
craftingTable.addShaped("libcraft/sophisticatedbackpacks/everlasting_upgrade", <item:sophisticatedbackpacks:everlasting_upgrade>, [
    [<tag:item:c:ingots/netherite>, <tag:item:c:nether_stars>, <tag:item:c:ingots/netherite>],
    [<tag:item:c:nether_stars>, <item:sophisticatedbackpacks:upgrade_base>, <tag:item:c:nether_stars>],
    [<tag:item:c:ingots/netherite>, <tag:item:c:nether_stars>, <tag:item:c:ingots/netherite>]]);

<recipetype:minecraft:crafting>.removeByName("sophisticatedbackpacks:xp_pump_upgrade");
craftingTable.addShaped("libcraft/sophisticatedbackpacks/xp_pump_upgrade", <item:sophisticatedbackpacks:xp_pump_upgrade>, [
    [<tag:item:c:dusts/redstone>, <item:create_enchantment_industry:experience_hatch>, <tag:item:c:dusts/redstone>],
    [<item:create:experience_block>, <item:sophisticatedbackpacks:advanced_pump_upgrade>, <item:create:experience_block>],
    [<tag:item:c:dusts/redstone>, <item:minecraft:ender_eye>, <tag:item:c:dusts/redstone>]]);

<recipetype:minecraft:crafting>.removeByName("sophisticatedbackpacks:pump_upgrade");
craftingTable.addShaped("libcraft/sophisticatedbackpacks/pump_upgrade", <item:sophisticatedbackpacks:pump_upgrade>, [
    [<tag:item:c:glass_blocks>, <item:immersiveengineering:fluid_pump>, <tag:item:c:glass_blocks>],
    [<item:immersiveengineering:fluid_pipe>, <item:sophisticatedbackpacks:upgrade_base>, <item:immersiveengineering:fluid_pipe>],
    [<tag:item:c:glass_blocks>, <item:immersiveengineering:fluid_pipe>, <tag:item:c:glass_blocks>]]);

<recipetype:minecraft:crafting>.removeByName("sophisticatedbackpacks:advanced_pump_upgrade");
craftingTable.addShaped("libcraft/sophisticatedbackpacks/advanced_pump_upgrade", <item:sophisticatedbackpacks:advanced_pump_upgrade>, [
    [<tag:item:c:plates/gold>, <item:immersiveengineering:fluid_sorter>, <tag:item:c:plates/gold>],
    [<tag:item:c:dusts/redstone>, <item:sophisticatedbackpacks:pump_upgrade>, <tag:item:c:dusts/redstone>],
    [<tag:item:c:plates/gold>, <tag:item:c:gems/diamond>, <tag:item:c:plates/gold>]]);

<recipetype:minecraft:crafting>.removeByName("sophisticatedbackpacks:advanced_jukebox_upgrade");
craftingTable.addShaped("libcraft/sophisticatedbackpacks/advanced_jukebox_upgrade", <item:sophisticatedbackpacks:advanced_jukebox_upgrade>, [
    [<tag:item:c:plates/gold>, <item:bibliocraft:disc_rack>, <tag:item:c:plates/gold>],
    [<tag:item:c:gems/diamond>, <item:sophisticatedbackpacks:jukebox_upgrade>, <tag:item:c:gems/diamond>],
    [<tag:item:c:plates/gold>, <item:immersiveengineering:component_iron>, <tag:item:c:plates/gold>]]);

<recipetype:minecraft:crafting>.removeByName("sophisticatedbackpacks:battery_upgrade");
craftingTable.addShaped("libcraft/sophisticatedbackpacks/battery_upgrade", <item:sophisticatedbackpacks:battery_upgrade>, [
    [<item:immersiveengineering:plate_duroplast>, <item:immersiveengineering:transformer>, <item:immersiveengineering:plate_duroplast>],
    [<item:immersiveengineering:insulating_glass>, <item:sophisticatedbackpacks:upgrade_base>, <item:immersiveengineering:insulating_glass>],
    [<item:immersiveengineering:plate_duroplast>, <item:immersiveengineering:capacitor_mv>, <item:immersiveengineering:plate_duroplast>]]);
    
<recipetype:minecraft:crafting>.removeByName("sophisticatedbackpacks:advanced_tool_swapper_upgrade");
craftingTable.addShaped("libcraft/sophisticatedbackpacks/advanced_tool_swapper_upgrade", <item:sophisticatedbackpacks:advanced_tool_swapper_upgrade>, [
    [<tag:item:c:plates/gold>, <item:immersiveengineering:component_electronic_adv>, <tag:item:c:plates/gold>],
    [<item:create:precision_mechanism>, <item:sophisticatedbackpacks:tool_swapper_upgrade>, <item:create:precision_mechanism>],
    [<tag:item:c:plates/gold>, <tag:item:c:tools/wrench>, <tag:item:c:plates/gold>]]);