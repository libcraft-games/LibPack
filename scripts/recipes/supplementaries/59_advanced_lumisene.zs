<recipetype:minecraft:crafting>.removeByName("supplementaries:lumisene_bottle");
<recipetype:minecraft:crafting>.removeByName("supplementaries:lumisene_bucket");
<recipetype:create:mixing>.removeByName("supplementaries:integration/lumisene_mixing");

<recipetype:immersiveengineering:refinery>.addJsonRecipe(
  "libcraft/immersiveengineering/refinery/lumisene", 
  {type: "immersiveengineering:refinery", 
  energy: 600, 
  input1: {tag: "c:creosote", amount: 8}, 
  result: {id: "supplementaries:lumisene", amount: 25}, 
  input0: {fluid: "createfood:glow_berry_juice", amount: 17},
  catalyst: {item: "minecraft:glowstone"}});
  
// add custom bottle filling recipes for lumisene bottles since they do not appear to be automatic
// (unlike buckets)

<recipetype:create:filling>.addJsonRecipe(
  "libcraft/create/filling/lumisene_bottle", 
  {
    type: "create:filling", 
    results: [{id: "supplementaries:lumisene_bottle"}], 
    ingredients: [
      {item: "minecraft:glass_bottle"}, 
      {type: "fluid_stack", amount: 250, fluid: "supplementaries:lumisene"}
    ]
  });
  
<recipetype:immersiveengineering:bottling_machine>.addJsonRecipe(
  "libcraft/immersiveengineering/bottling/lumisene_bottle", 
  {
    type: "immersiveengineering:bottling_machine", 
    input: {item: "minecraft:glass_bottle"}, 
    fluid: {fluid: "supplementaries:lumisene", amount: 250}, 
    results: [{id: "supplementaries:lumisene_bottle"}]
  });