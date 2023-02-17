export = DatabaseStore;
declare class DatabaseStore {
    constructor(connection: any, tableName: any, prefix?: string);
    _connection: any;
    _tableName: any;
    _prefix: string;
    /**
     * Probability (parts per million) that garbage collection (GC) should be performed
     * when storing a piece of data in the cache. Defaults to 100, meaning 0.01% chance.
     * This number should be between 0 and 1000000. A value 0 meaning no GC will be performed at all.
     */
    _gcProbability: number;
    /**
     * Return a new query builder instance with cache's table set
     *
     * @returns {mixed}
     * @private
     */
    private _table;
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
     * @param  {mixed}   value
     * @param  {int|float}     minutes
     * @return {Promise<void>}
     */
    put(key: string, value: mixed, minutes?: int | float): Promise<void>;
    /**
     * Store multiple items in the cache for a given number of minutes.
     *
     * @param  {object}  values
     * @param  {int}     minutes
     * @return {Promise<void>}
     */
    putMany(object: any, minutes: int): Promise<void>;
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
     * Get the underlying database connection.
     *
     * @return {Object} database connection
     */
    getConnection(): any;
    /**
     * Get the cache key prefix.
     *
     * @return {string}
     */
    getPrefix(): string;
    /**
     * Removes the expired data values.
     * @param {bool} force whether to enforce the garbage collection regardless of [[gcProbability]].
     * Defaults to false, meaning the actual deletion happens with the probability as specified by [[gcProbability]].
     */
    _gc(force?: bool): Promise<void>;
}
