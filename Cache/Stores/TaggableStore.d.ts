export = TaggableStore;
declare class TaggableStore {
    /**
     * Begin executing a new tags operation.
     *
     * @param  {array|mixed}  names
     * @return {TaggedCache}
     */
    tags(names: any[] | mixed, ...args: any[]): TaggedCache;
}
import TaggedCache = require("./TaggedCache");
