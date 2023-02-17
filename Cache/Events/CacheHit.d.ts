export = CacheHit;
/**
 * adonis-cache
 *
 * (c) Hany El Nokaly <hany.elnokaly@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/
declare class CacheHit {
    /**
     * Create a new event instance.
     *
     * @param  {string}  key    The key that was hit
     * @param  {mixed}   value  The value that was retrieved
     * @param  {array}   tags   The tags that were assigned to the key
     * @returns {void}
     */
    constructor(key: string, value: mixed, tags?: any[]);
    key: string;
    tags: any[];
    value: mixed;
}
declare namespace CacheHit {
    const EVENT: string;
}
