val types = ["alluring", "repulsive"];

for type in types {
  val sprout = "enderscape:" + type + "_magnia_sprout";
  val substrate = "enderscape:" + type + "_magnia";
  <recipetype:immersiveengineering:cloche>.addJsonRecipe(
    "libcraft/cloche/" + type + "_magnia_sprout", 
    {
      type: "immersiveengineering:cloche", 
      fluid: {type: "neoforge:components", components: {"minecraft:potion_contents": {potion: "enderscape:low_gravity"}}, fluids: "immersiveengineering:potion"}, 
      input: {item: "endersdelight:ender_shard"}, 
      time: 1000, 
      render: {block: sprout, type: "immersiveengineering:generic"}, 
      results: [{id: sprout}], 
      soil: {item: substrate}});
}