export = KeyForgotten;
/**
 * adonis-cache
 *
 * (c) Hany El Nokaly <hany.elnokaly@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/
declare class KeyForgotten {
    /**
     * Create a new event instance.
     *
     * @param   {string}  key   The key that was forgotten
     * @param   {array}   tags  The tags that were assigned to the key
     * @returns {void}
     */
    constructor(key: string, tags?: any[]);
    key: string;
    tags: any[];
}
declare namespace KeyForgotten {
    const EVENT: string;
}
