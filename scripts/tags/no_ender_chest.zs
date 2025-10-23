# loader tags
// remove ender chest from #c:chests
// mods appear to assume that tag is just wooden chests,
// instead of properly using #c:chests/wooden.
// no mod appears to use the tag to apply to both,
// so i'll just remove ender chests for now.
// if that ends up breaking things, change this file to replace recipes instead!
<tag:item:c:chests>.remove(<item:minecraft:ender_chest>);