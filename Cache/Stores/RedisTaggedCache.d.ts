export = RedisTaggedCache;
declare class RedisTaggedCache extends TaggedCache {
    /**
     * Store an item in the cache indefinitely.
     *
     * @param  {string}  key
     * @param  {mixed}   value
     * @return {Promise<void>}
     */
    forever(key: string, value: mixed): Promise<void>;
    /**
     * Store standard key references into store.
     *
     * @param  {string}  namespace
     * @param  {string}  key
     * @return {Promise<void>}
     *
     * @private
     */
    private _pushStandardKeys;
    /**
     * Store forever key references into store.
     *
     * @param  {string}  namespace
     * @param  {string}  key
     * @return {Promise<void>}
     *
     * @private
     */
    private _pushForeverKeys;
    /**
     * Store a reference to the cache key against the reference key.
     *
     * @param  {string}  namespace
     * @param  {string}  key
     * @param  {string}  reference
     * @return {Promise<void>}
     *
     * @private
     */
    private _pushKeys;
    /**
     * Delete all of the items that were stored forever.
     *
     * @return {Promise<void>}
     *
     * @private
     */
    private _deleteForeverKeys;
    /**
     * Delete all standard items.
     *
     * @return {Promise<void>}
     *
     * @private
     */
    private _deleteStandardKeys;
    /**
     * Find and delete all of the items that were stored against a reference.
     *
     * @param  {string}  reference
     * @return {Promise<void>}
     *
     * @private
     */
    private _deleteKeysByReference;
    /**
     * Delete item keys that have been stored against a reference.
     *
     * @param  {string}  referenceKey
     * @return {Promise<void>}
     *
     * @private
     */
    private _deleteValues;
    /**
     * Get the reference key for the segment.
     *
     * @param  {string}  segment
     * @param  {string}  suffix
     * @return {string}
     *
     * @private
     */
    private _referenceKey;
}
declare namespace RedisTaggedCache {
    const REFERENCE_KEY_FOREVER: string;
    const REFERENCE_KEY_STANDARD: string;
}
import TaggedCache = require("./TaggedCache");
