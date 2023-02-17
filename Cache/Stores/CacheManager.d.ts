export = CacheManager;
declare class CacheManager extends Repository {
    constructor(app: any);
    _app: any;
    _stores: any[];
    _customCreators: any[];
    /**
     * Get a cache store instance by name.
     *
     * @param  {string|null}  name
     * @return {mixed}
     */
    store(name?: string | null): mixed;
    /**
     * Get a cache driver instance.
     *
     * @param  {string}  driver
     * @return {mixed}
     */
    driver(driver?: string): mixed;
    /**
     * Attempt to get the store from the local cache.
     *
     * @param  {string}  name
     * @return {Repository}
     * @private
     */
    private _get;
    /**
     * Resolve the given store.
     *
     * @param  {string}  name
     * @return {Repository}
     *
     * @throws {InvalidArgumentException}
     * @private
     */
    private _resolve;
    /**
     * Call a custom driver creator.
     *
     * @param  {object}  config
     * @return {mixed}
     * @private
     */
    private _callCustomCreator;
    /**
     * Create an instance of the Null cache driver.
     *
     * @return {Repository}
     * @private
     */
    private _createNullDriver;
    /**
     * Create an instance of the object cache driver.
     *
     * @return {Repository}
     * @private
     */
    private _createObjectDriver;
    /**
     * Create an instance of the Redis cache driver.
     *
     * @param  {object}  config
     * @return {Repository}
     * @private
     */
    private _createRedisDriver;
    /**
     * Create an instance of the database cache driver.
     *
     * @param  {object}  config
     * @return {Repository}
     * @private
     */
    private _createDatabaseDriver;
    /**
     * Create a new cache repository with the given implementation.
     *
     * @param  {Store}  store
     * @return {Repository}
     */
    repository(store: Store): Repository;
    /**
     * Get the cache prefix.
     *
     * @param  {object}  config
     * @return {string}
     * @private
     */
    private _getPrefix;
    /**
     * Get the cache connection configuration.
     *
     * @param  {string}  name
     * @return {object}
     * @private
     */
    private _getConfig;
    /**
     * Get the default cache driver name.
     *
     * @return {string}
     */
    getDefaultDriver(): string;
    /**
     * Set the default cache driver name.
     *
     * @param  {string}  name
     * @return {void}
     */
    setDefaultDriver(name: string): void;
    /**
     * Register a custom driver creator Closure.
     *
     * @param  {string}    driver
     * @param  {function}  closure
     * @return {this}
     */
    extend(driver: string, closure: Function): this;
}
import Repository = require("./Repository");
