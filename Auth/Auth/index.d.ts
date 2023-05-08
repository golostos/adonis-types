export = Auth;

import Model from '../../Lucid/Lucid/Model';
import SchemaName from "../Schemes/SchemaName";
import JwtScheme from "../Schemes/Jwt";
import SessionScheme from "../Schemes/Session";
import BasicScheme from "../Schemes/BasicAuth";
import ApiScheme from "../Schemes/Api";

type SchemeTypes<UserModel> = {
    jwt: JwtScheme<UserModel>;
    session: SessionScheme<UserModel>;
    basic: BasicScheme<UserModel>;
    api: ApiScheme<UserModel>;
};


type Scheme<Schema extends SchemaName, UserModel> = Schema extends 'jwt' ? JwtScheme<UserModel> :
    Schema extends 'session' ? SessionScheme<UserModel> :
    Schema extends 'basic' ? BasicScheme<UserModel> :
    Schema extends 'api' ? ApiScheme<UserModel> :
    never

type BaseAuthConfig = {
    [key: string]: {
        serializer: 'lucid' | 'database',
        scheme: SchemaName,
        model: string,
        uid: string,
        password?: string,
        table?: string,
        foreignKey?: string,
        primaryKey?: string,
        options?: any,
    }
}

type BaseUserModels = {
    [key: string]: Model
}

type AuthenticatorInstances<AC extends BaseAuthConfig, UM extends BaseUserModels, TSchema extends SchemaName> = {
    [K in keyof AC]: Scheme<TSchema, UM[AC[K]['model']]>;
};
// type AuthenticatorInstances<AC extends BaseAuthConfig, UM extends BaseUserModels> = {
//     [K in keyof AC]: SchemeTypes<UM[AC[K]['model']]>[AC[K]['scheme']];
// };


/**
 * The auth class is used to authenticate users using a pre-defined
 * authenticator in the auth config.
 *
 * This class proxies all the methods of the `scheme` that is currently
 * in use. So do make sure to refer the schemes API.
 *
 * @class Auth
 * @module Lucid
 * @constructor
 *
 * @param {Context} ctx     Request context
 * @param {Config}  Config  Reference to config provider
 */
declare class Auth<AuthName extends string, AuthConfig extends BaseAuthConfig, UserModels extends BaseUserModels, TSchema extends SchemaName> {
    constructor(ctx: any, Config: any);
    _ctx: any;
    Config: any;
    _authenticatorsPool: {};
    authenticatorInstance: Scheme<any, any>;
    /**
     * Newup an authenticator instance for a given name. The names must be a
     * reference for the `keys` inside the `config/auth.js` file.
     *
     * @method authenticator
     *
     * @param  {String}      name
     *
     * @return {Scheme}
     */
    authenticator<TAuthName extends AuthName>(name: TAuthName): AuthenticatorInstances<AuthConfig, UserModels, TSchema>[TAuthName];
    // authenticator<TAuthName extends AuthName>(name: TAuthName): AuthenticatorInstances<AuthConfig, UserModels>[TAuthName];
}
//# sourceMappingURL=index.d.ts.map