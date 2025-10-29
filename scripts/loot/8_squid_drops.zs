import crafttweaker.api.loot.condition.DamageSourceLootCondition;
import crafttweaker.api.loot.condition.InvertedLootCondition;
import crafttweaker.api.loot.condition.LootConditions;
import crafttweaker.api.loot.modifier.CommonLootModifiers;
import crafttweaker.api.predicate.DamageSourcePredicate;
import crafttweaker.api.predicate.EntityEquipmentPredicate;
import crafttweaker.api.predicate.EntityPredicate;
import crafttweaker.api.predicate.ItemPredicate;
import stdlib.List;

// minecraft:entities/glow_squid
// minecraft:entities/squid
<entitytype:minecraft:squid>.addLootModifier(
  "libcraft/loot/culturaldelights/remove_base_squid",
  CommonLootModifiers.clearLoot());
// if killed WITHOUT a knife (c:tools/knife)
//   drop vanilla amount of ink sacs (1-3 w/o Looting, 1-6 with)
//   and a few calamari items (modified by Looting)
<entitytype:minecraft:squid>.addLootModifier(
  "libcraft/loot/squid/sacs_and_calamari",
  LootConditions.only(
    DamageSourceLootCondition.create(
      DamageSourcePredicate.create()
        .direct(EntityPredicate.create()
          .equipment(EntityEquipmentPredicate.create()
            .mainHand(ItemPredicate.create(<tag:item:c:tools/knife>)))))),
  (stacks, context) => {
    val result = new List<IItemStack>();
    // add ink sacs
    // add calamari
    result.add(<item:minecraft:diamond>);
    return result;
  });
// if killed WITH a knife,
//   drop just a squid

// TODO: modify squid cutting recipe to yield 1 ink sac and 8 calamari every time