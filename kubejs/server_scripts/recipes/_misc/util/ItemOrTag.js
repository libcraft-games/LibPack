// Converts a string to an object specifying whether it is an item, if it does _not_ start with '#',
// or a tag, if it _does_ start with '#'.
//
// args:
//  itemOrTag   string | any    The item or tag to convert. If it is not a string, is passed through
//                              unchanged.
function ItemOrTag(itemOrTag) {
    if((typeof itemOrTag) == 'string') {
        if(itemOrTag.startsWith('#')) {                
            return { tag: itemOrTag.substring(1) }
        } else {
            return { item: itemOrTag }
        }
    }
    return itemOrTag
}