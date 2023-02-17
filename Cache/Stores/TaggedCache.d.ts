export = TaggedCache;
declare class TaggedCache extends Repository {
    /**
     * Create a new tagged cache instance.
     *
     * @param  {Store}   store
     * @param  {TagSet}  tags   The tag set instance
     * @return {void}
     */
    constructor(store: Store, tags: TagSet);
    _tags: TagSet;
    /**
     * {@inheritdoc}
     */
    _fireCacheEvent(event: any, payload: any): void;
    /**
     * Increment the value of an item in the cache.
     *
     * @param  {string}  key
     * @param  {mixed}   value
     * @return {Promsie<void>}
     */
    increment(key: string, value?: mixed): Promsie<void>;
    /**
     * Increment the value of an item in the cache.
     *
     * @param  {string}  key
     * @param  {mixed}   value
     * @return {Promise<void>}
     */
    decrement(key: string, value?: mixed): Promise<void>;
    /**
     * Remove all items from the cache.
     *
     * @return {Promise<void>}
     */
    flush(): Promise<void>;
    /**
     * {@inheritdoc}
     */
    _itemKey(key: any): Promise<string>;
    /**
     * Get a fully qualified key for a tagged item.
     *
     * @param  {string}  key
     * @return {Promise<string>}
     */
    taggedItemKey(key: string): Promise<string>;
}
import Repository = require("./Repository");
