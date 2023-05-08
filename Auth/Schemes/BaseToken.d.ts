export = BaseTokenScheme;
/**
 * This scheme is extended by Jwt and API scheme, to share
 * common functionality.
 *
 * @constructor
 * @param {Encryption} Encryption
 */
declare class BaseTokenScheme<UserModel> extends BaseScheme<UserModel> {
    /**
     * IoC container injections
     *
     * @attribute inject
     * @static
     * @ignore
     *
     * @type {Array}
     */
    static get inject(): any[];
    constructor(Encryption: any);
    Encryption: any;
    /**
     * Revokes ( all/an array of multiple ) the tokens for currently logged in user.
     *
     * @method revokeTokens
     *
     * @param  {Array}              [tokens]
     * @param  {Boolean}            [deleteInstead = false]
     *
     * @return {Number}             Number of affected database rows
     *
     * @example
     * ```js
     * await auth.revokeTokens()
     * ```
     *
     * Revoke selected tokens
     * ```js
     * await auth.revokeTokens(['token1', 'token2'])
     * ```
     *
     * Delete instead of just revoking them
     * ```js
     * await auth.revokeTokens(null, true)
     * ```
     */
    revokeTokens(tokens?: any[], deleteInstead?: boolean): number;
    /**
     * Revokes ( all/an array of multiple ) the tokens for a given user.
     *
     * @method revokeTokensForUser
     *
     * @param  {User|Object}        user
     * @param  {Array}              [tokens]
     * @param  {Boolean}            [deleteInstead = false]
     *
     * @return {Number}             Number of affected database rows
     *
     * @example
     * ```js
     * const user = await User.find(1)
     * await auth.revokeTokensForUser(user)
     * ```
     *
     * Revoke selected tokens
     * ```js
     * const user = await User.find(1)
     * await auth.revokeTokensForUser(user, ['token1', 'token2'])
     * ```
     *
     * Delete instead of just revoking them
     * ```js
     * const user = await User.find(1)
     * await auth.revokeTokensForUser(user, null, true)
     * ```
     */
    revokeTokensForUser(user: UserModel | any, tokens?: any[], deleteInstead?: boolean): number;
    /**
     * Lists all refresh tokens for currently logged in user.
     *
     * @method listTokens
     * @async
     *
     * @return {Array}
     */
    listTokens(): any[];
}
import BaseScheme = require("./Base");
//# sourceMappingURL=BaseToken.d.ts.map