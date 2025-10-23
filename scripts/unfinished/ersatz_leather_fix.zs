// https://www.reddit.com/r/feedthebeast/comments/o5sy7h/crafttweaker_can_i_replace_all_instances_of_one/
// https://docs.blamejared.com/1.21.1/en/vanilla/api/recipe/replacement/Replacer/
// https://docs.blamejared.com/1.21.1/en/vanilla/api/recipe/replacement/IFilteringRule/
/* not working rn, will fix later
import crafttweaker.api.recipe.replacement.Replacer;
import crafttweaker.api.recipe.replacement.type.ManagerFilteringRule;
import crafttweaker.api.recipe.replacement.type.ComponentFilteringRule;
import crafttweaker.api.recipe.IRecipeComponent;

Replacer.create()
         .filter(ManagerFilteringRule.of(craftingTable))
         .filter(ComponentFilteringRule.of<IRecipeComponent>(<recipecomponent:crafttweaker:input/ingredients>))
         .replace(<item:minecraft:leather>, <tag:item:c:leathers>)
         .execute();
*/