import crafttweaker.api.ingredient.type.IIngredientEmpty;
import crafttweaker.api.ingredient.IIngredient;

<recipetype:farmersdelight:cooking>.removeByName("createfood:farmersdelight/cooking/pasta_from_cooking");
// param 3 (never exported for some reason) is CookingPotRecipeBookTab? (from experimentation; documentation is poor nowadays, it seems)
// from 1.19 docs: https://docs.blamejared.com/1.19/en/mods/FarmersDelight/CookingPotRecipeBookTab/
<recipetype:farmersdelight:cooking>.addRecipe("libcraft/farmersdelight/cooking/pasta_from_cooking", <item:createfood:pasta>, [<tag:item:c:raw_pasta>], <constant:farmersdelight:cooking_pot_recipe_book_tab:misc>, (<item:minecraft:air>).asMutable(), 0.2, 200);