export = RedisStore;
declare class RedisStore extends TaggableStore {
    constructor(Redis: any, prefix: string, connection: any);
    _redis: any;
    _prefix: string;
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
     * @return {Promise<array>}
     */
    many(keys: Array<string>): Promise<any[]>;
    /**
     * Store an item in the cache for a given number of minutes.
     *
     * @param  {string}  key
     * @param  {mixed}   value
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
     * Begin executing a new tags operation.
     *
     * @param  array|mixed  $names
     * @return {RedisTaggedCache}
     */
    tags(names: any, ...args: any[]): RedisTaggedCache;
    /**
     * Get the Redis connection instance
     *
     * @return {Object}
     *
     */
    connection(): any;
    /**
     * Set the connection name to be used
     *
     * @param {string} connection
     * @return {void}
     */
    setConnection(connection: string): void;
    _connection: string;
    /**
     * Get the Redis database instance
     *
     * @return {object}
     */
    getRedis(): object;
    /**
     * Get the cache key prefix
     *
     * @return {string}
     */
    getPrefix(): string;
    /**
     * Set the cache key prefix
     *
     * @param {string} prefix
     * @return {void}
     */
    setPrefix(prefix: string): void;
    prefix: string;
}
import TaggableStore = require("./TaggableStore");
import RedisTaggedCache = require("./RedisTaggedCache");
