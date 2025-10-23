import crafttweaker.api.entity.type.misc.Mob;
import crafttweaker.neoforge.api.event.entity.EntityJoinLevelEvent;

/*
events.register<EntityJoinLevelEvent>(event => {
  // println(event.entity.data.asString());
  // println((event.entity as Mob).armorValue);
  // .maxHealth
  // .level.dimension
  // .getAttribute(<minecraft:generic.attack_damage>)
  // .getAttribute(<minecraft:generic.armor>)
  if(event.entity is Mob) {
    val mob = event.entity as Mob;
    println("name:");
    println(mob.displayName);
    println("max health:");
    println(mob.getAttribute(<attribute:minecraft:generic.max_health>).baseValue);
    println("armor:");
    println(mob.getAttribute(<attribute:minecraft:generic.armor>).baseValue);
    println("attack damage:");
    println(mob.getAttribute(<attribute:minecraft:generic.attack_damage>).baseValue);
  }
});*/