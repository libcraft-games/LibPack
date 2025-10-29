import crafttweaker.api.loot.condition.DamageSourceLootCondition;
import crafttweaker.api.loot.condition.InvertedLootCondition;
import crafttweaker.api.loot.condition.LootConditions;
import crafttweaker.api.loot.modifier.CommonLootModifiers;
import crafttweaker.api.predicate.DamageSourcePredicate;
import crafttweaker.api.predicate.EntityEquipmentPredicate;
import crafttweaker.api.predicate.EntityPredicate;
import crafttweaker.api.predicate.ItemPredicate;
import crafttweaker.api.loot.condition.LootTableIdLootCondition;
import crafttweaker.api.loot.condition.KilledByPlayerLootCondition;
import stdlib.List;

// minecraft:entities/glow_squid
// minecraft:entities/squid
<entitytype:minecraft:squid>.addLootModifier(
  "libcraft/loot/culturaldelights/remove_base_squid",
  CommonLootModifiers.clearLoot());
// if killed WITHOUT a knife (c:tools/knife)
//   drop vanilla amount of ink sacs (1-3 w/o Looting, 1-6 with)
//   and a few calamari items (modified by Looting)
// https://minecraft.wiki/w/Drops#Common_drops
loot.modifiers.register(
  "libcraft/loot/squid/sacs_and_calamari",
  LootConditions.allOf(
    LootTableIdLootCondition.create(<resource:minecraft:entities/squid>),
    KilledByPlayerLootCondition.create()
  ),
  CommonLootModifiers.chaining(
    // reduced from 1-3 to 0-2 since addWithUniformBonus seems to drop a minimum of 1
    // max here appears to be exclusive (undocumented, cool!)
    CommonLootModifiers.addWithRandomAmount(<item:minecraft:dirt>, 0, 3),
    CommonLootModifiers.addWithUniformBonus(<enchantment:minecraft:looting>, 2, <item:minecraft:diamond> * 0)
  ));

// if killed WITH a knife,
//   drop just a squid

// TODO: modify squid cutting recipe to yield 1 ink sac and 8 calamari every time