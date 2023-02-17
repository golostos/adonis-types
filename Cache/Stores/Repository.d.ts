export = Repository;
declare class Repository {
    /**
     * Create a new cache repository instance.
     *
     * @param  {Object}  store  The cache store implementation
     * @return {void}
     */
    constructor(store: any);
    _store: any;
    _events: any;
    /**
     * Set the event dispatcher instance.
     *
     * @param  {Adonis/Src/Event}  events
     * @return {void}
     */
    setEventDispatcher(events: any): void;
    /**
     * Fire an event for this cache instance.
     *
     * @param  {string}  event
     * @param  {array}  payload
     * @return {void}
     */
    _fireCacheEvent(event: string, payload: any[]): void;
    /**
     * Determine if an item exists in the cache.
     *
     * @param  {string}  key
     * @return {Promise<boolean>}
     */
    has(key: string): Promise<boolean>;
    /**
     * Retrieve an item from the cache by key.
     *
     * @param  {string}  key
     * @param  {mixed}   defaultValue
     * @return {Promise<mixed>}
     */
    get(key: string, defaultValue?: mixed): Promise<mixed>;
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
     * Retrieve an item from the cache and delete it.
     *
     * @param  {string}  key
     * @param  {mixed}   default
     * @return {Promise<mixed>}
     */
    pull(key: string, defaultValue?: any): Promise<mixed>;
    /**
     * Store an item in the cache.
     *
     * @param  {string}          key
     * @param  {mixed}           value
     * @param  {Date|float|int}  minutes
     * @return {Promise<void>}
     */
    put(key: string, value: mixed, minutes?: Date | float | int): Promise<void>;
    /**
     * Store multiple items in the cache for a given number of minutes.
     *
     * @param  {object}  values
     * @param  {Date|float|int}  minutes
     * @return {Promise<void>}
     */
    putMany(values: object, minutes: Date | float | int): Promise<void>;
    /**
     * Store an item in the cache if the key does not exist.
     *
     * @param  {string}  key
     * @param  {mixed}   value
     * @param  {DateTime|float|int}  minutes
     * @return {Promise<boolean>}
     */
    add(key: string, value: mixed, minutes: DateTime | float | int): Promise<boolean>;
    /**
     * Increment the value of an item in the cache.
     *
     * @param  {string}  key
     * @param  {int}  value
     * @return {Promise<int|boolean>}
     */
    increment(key: string, value?: int): Promise<int | boolean>;
    /**
     * Decrement the value of an item in the cache.
     *
     * @param  {string}  key
     * @param  {mixed}  value
     * @return {Promise<int|boolean>}
     */
    decrement(key: string, value?: mixed): Promise<int | boolean>;
    /**
     * Store an item in the cache indefinitely.
     *
     * @param   {string}  key
     * @param   {mixed}   value
     * @return  {void}
     */
    forever(key: string, value: mixed): void;
    /**
     * Get an item from the cache, or store the default value.
     *
     * @param  {string}          key
     * @param  {Date|float|int}  minutes
     * @param  {function}          closure
     * @return {Promise<mixed>}
     */
    remember(key: string, minutes: Date | float | int, closure: Function): Promise<mixed>;
    /**
     * Get an item from the cache, or store the default value forever.
     *
     * @param  {string}          key
     * @param  {function}        closure
     * @return {Promise<mixed>}
     */
    sear(key: string, closure: Function): Promise<mixed>;
    /**
     * Get an item from the cache, or store the default value forever.
     *
     * @param  {string}    key
     * @param  {function}  closure
     * @return {Promise<mixed>}
     */
    rememberForever(key: string, closure: Function): Promise<mixed>;
    /**
     * Remove an item from the cache.
     *
     * @param  {string}  key
     * @return {Promise<boolean>}
     */
    forget(key: string): Promise<boolean>;
    /**
     * Begin executing a new tags operation if the store supports it.
     *
     * @param  {Array<string>}  names
     * @return {TaggedCache}
     *
     * @throws {BadMethodCallException}
     */
    tags(names: Array<string>, ...args: any[]): TaggedCache;
    /**
     * Format the key for a cache item.
     *
     * @param  {string}  key
     * @return {Promise<string>}
     */
    _itemKey(key: string): Promise<string>;
    /**
     * Get the cache store implementation.
     *
     * @return {Store}
     */
    getStore(): Store;
    /**
     * Calculate the number of minutes with the given duration.
     *
     * @param  {Date|float|int}  duration
     * @return {float|int|null}
     */
    _getMinutes(duration: Date | float | int): float | int | null;
}
