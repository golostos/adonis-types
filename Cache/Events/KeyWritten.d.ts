export = KeyWritten;
/**
 * adonis-cache
 *
 * (c) Hany El Nokaly <hany.elnokaly@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/
declare class KeyWritten {
    /**
     * Create a new event instance.
     *
     * @param    {string}  key The key that was written
     * @param    {mixed}   value The value that was written
     * @param    {int}     minutes The number of minutes the key should be valid
     * @param    {array}   tags The tags that were assigned to the key
     * @returns  {void}
     */
    constructor(key: string, value: mixed, minutes: int, tags?: any[]);
    key: string;
    tags: any[];
    value: mixed;
    minutes: int;
}
declare namespace KeyWritten {
    const EVENT: string;
}
