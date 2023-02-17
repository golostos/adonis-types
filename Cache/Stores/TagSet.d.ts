export = TagSet;
declare class TagSet {
    /**
     * Create a new TagSet instance.
     *
     * @param  {Store}  store  The cache store implementation
     * @param  {array}  names  The tag names
     * @return {TagSet}
     */
    constructor(store: Store, names?: any[]);
    _store: Store;
    _names: any[];
    /**
     * Reset all tags in the set.
     *
     * @return {Promise<void>}
     */
    reset(): Promise<void>;
    /**
     * Get the unique tag identifier for a given tag.
     *
     * @param  {string}  name
     * @return {Promise<string>}
     */
    tagId(name: string): Promise<string>;
    /**
     * Get an array of tag identifiers for all of the tags in the set.
     *
     * @return {Promise<array>}
     */
    _tagIds(): Promise<any[]>;
    /**
     * Get a unique namespace that changes when any of the tags are flushed.
     *
     * @return {Promise<string>}
     */
    getNamespace(): Promise<string>;
    /**
     * Reset the tag and return the new tag identifier.
     *
     * @param  {string}  name
     * @return {Promise<string>}
     */
    resetTag(name: string): Promise<string>;
    /**
     * Get the tag identifier key for a given tag.
     *
     * @param  {string}  name
     * @return {string}
     */
    tagKey(name: string): string;
    /**
     * Get all of the tag names in the set.
     *
     * @return {array}
     */
    getNames(): any[];
}
