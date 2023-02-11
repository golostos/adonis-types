export = Database;
/**
 * The database class is a reference to knex for a single
 * connection. It has couple of extra methods over knex.
 *
 * Note: You don't instantiate this class directly but instead
 * make use of @ref('DatabaseManager')
 *
 * @class Database
 * @constructor
 * @group Database
 */
declare class Database {
    constructor(config: any);
    connectionClient: any;
    knex: knex<any, unknown[]>;
    _globalTrx: any;
    /**
     * Bind listeners for database events. Which are
     * `query`, `query-error`, `query-response` and
     * `sql`
     *
     * @method on
     *
     * @param  {String}   event
     * @param  {Function} callback
     *
     * @chainable
     */
    on(event: string, callback: Function): Database;
    /**
     * The schema builder instance to be used
     * for creating database schema.
     *
     * You should obtain a new schema instance for every
     * database operation and should never use stale
     * instances. For example
     *
     * @example
     * ```js
     * // WRONG
     * const schema = Database.schema
     * schema.createTable('users')
     * schema.createTable('profiles')
     * ```
     *
     * ```js
     * // RIGHT
     * Database.schema.createTable('users')
     * Database.schema.createTable('profiles')
     * ```
     *
     * @attribute schema
     *
     * @return {Object}
     */
    get schema(): any;
    /**
     * Returns the fn from knex instance
     *
     * @method fn
     *
     * @return {Object}
     */
    get fn(): any;
    /**
     * Method to construct raw database queries.
     *
     * @method raw
     *
     * @param  {...Spread} args
     *
     * @return {String}
     */
    raw(...args: Spread[]): string;
    /**
     * Returns a trx object to be used for running queries
     * under transaction.
     *
     * @method beginTransaction
     * @async
     *
     * @return {Object}
     *
     * @example
     * ```js
     * const trx = await Database.beginTransaction()
     * await trx
     *   .table('users')
     *   .insert({ username: 'virk' })
     *
     * // or
     * Database
     *   .table('users')
     *   .transacting(trx)
     *   .insert({ username: 'virk' })
     * ```
     */
    beginTransaction(): any;
    /**
     * Run a callback inside a transaction
     *
     * @param {Function} callback
     *
     * @method transaction
     *
     * @returns Object
     */
    transaction(callback: Function): Promise<knex.Transaction<any, any>>;
    /**
     * Starts a global transaction, where all query builder
     * methods will be part of transaction automatically.
     *
     * Note: You must not use it in real world apart from when
     * writing tests.
     *
     * @method beginGlobalTransaction
     * @async
     *
     * @return {void}
     */
    beginGlobalTransaction(): void;
    /**
     * Rollbacks global transaction.
     *
     * @method rollbackGlobalTransaction
     *
     * @return {void}
     */
    rollbackGlobalTransaction(): void;
    /**
     * Commits global transaction.
     *
     * @method commitGlobalTransaction
     *
     * @return {void}
     */
    commitGlobalTransaction(): void;
    /**
     * Return a new instance of query builder
     *
     * @method query
     *
     * @return {Object}
     */
    query(): any;
    /**
     * Closes the database connection. No more queries
     * can be made after this.
     *
     * @method close
     *
     * @return {Promise}
     */
    close(): Promise<any>;
}
import knex = require("knex");
//# sourceMappingURL=index.d.ts.map