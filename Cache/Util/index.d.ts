/**
 * adonis-cache
 *
 * (c) Hany El Nokaly <hany.elnokaly@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/
export function serialize(data: any): string;
export function deserialize(data: any): any;
export function valueOf(value: any): Promise<any>;
/**
 * Returns integer number between two numbers (inclusive)
 *
 * @param {int} min
 * @param {int} max
 * @return int
 */
export function randomIntBetween(min: int, max: int): any;
