// Converts an item or tag with optional count to an IE _b_ase _p_redicate for use in IE recipe
// arguments.
// 
// args:
//  itemOrTag   string | any    The object to convert. If it is not a string, it's passed through
//                              unchanged; if it is a string, it is treated as a tag if it starts
//                              with '#' and as an item otherwise.
//  count       int = 1         the count associated with the predicate.
function ie_BP(itemOrTag, count) {
    if(count == null)
        count = 1
    if((typeof itemOrTag) == 'string') {
        if(itemOrTag.startsWith('#')) {                
            return {
                basePredicate: {
                    tag: itemOrTag.substring(1)
                },
                count: count
            }
        } else {
            return {
                basePredicate: {
                    item: itemOrTag
                },
                count: count
            }
        }
    }
    return itemOrTag
}