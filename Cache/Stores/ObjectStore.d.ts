export = ObjectStore;
declare class ObjectStore extends TaggableStore {
    _storage: {};
    /**
     * Retrieve an item from the cache by key.
     *
     * @param  {string} key
     * @return {Promise<mixed>}
     */
    get(key: string): Promise<mixed>;
    /**
     * Retrieve multiple items from the cache by key.
     *
     * Items not found in the cache will have a null value.
     *
     * @param  {Array<string>}  keys
     * @return {Promise<object>}
     */
    many(keys: Array<string>): Promise<object>;
    /**
     * Store an item in the cache for a given number of minutes.
     *
     * @param  {string}  key
     * @param  {mixed}     value
     * @param  {int|float}     minutes
     * @return {Promise<void>}
     */
    put(key: string, value: mixed, minutes?: int | float): Promise<void>;
    /**
     * Store multiple items in the cache for a given number of minutes.
     *
     * @param  {object}  object
     * @param  {int}     minutes
     * @return {Promise<void>}
     */
    putMany(object: object, minutes: int): Promise<void>;
    /**
     * Increment the value of an item in the cache.
     *
     * @param  {string}  key
     * @param  {mixed}   value
     * @return {Promise<int|boolean>}
     */
    increment(key: string, value?: mixed): Promise<int | boolean>;
    /**
     * Decrement the value of an item in the cache.
     *
     * @param  {string}  key
     * @param  {mixed}   value
     * @return {Promise<int|boolean>}
     */
    decrement(key: string, value?: mixed): Promise<int | boolean>;
    /**
     * Increment or decrement the value of an item in the cache.
     *
     * @param {string}    key
     * @param {mixed}     value
     * @param {function}  callback
     * @return {Promise<int|boolean>}
     *
     * @private
     */
    private _incrementOrDecrement;
    /**
     * Store an item in the cache indefinitely.
     *
     * @param  {string}  key
     * @param  {mixed}   value
     * @return {Promise<void>}
     */
    forever(key: string, value: mixed): Promise<void>;
    /**
     * Remove an item from the cache.
     *
     * @param  {string}  key
     * @return {Promise<boolean>}
     */
    forget(key: string): Promise<boolean>;
    /**
     * Remove all items from the cache.
     *
     * @return {Promise<void>}
     */
    flush(): Promise<void>;
    /**
     * Get the cache key prefix.
     *
     * @return string
     */
    getPrefix(): string;
}
import TaggableStore = require("./TaggableStore");
