import VanillaSerializer from '../Serializers/Vanilla';
import Model from '../Model'
import type knex from '../../../knex';
export = QueryBuilder;
type Serializer = VanillaSerializer
type Collection = Promise<Serializer>
type Mixed = any
// type Constructor<T> = { new(): T }
// type FullQueryBuilder = knex.QueryBuilder

interface KnexQueryBuilder<TModel> extends Omit<knex.QueryBuilder<TModel>, 'delete' | 'first' | 'insert' | 'truncate' | 'update' | 'with' | 'clone'> {}
declare class KnexQueryBuilder<TModel> {}
/**
 * Query builder for the lucid models extended
 * by the @ref('Database') class.
 *
 * @class QueryBuilder
 * @constructor
 */
declare class QueryBuilder<TModel> extends KnexQueryBuilder<TModel> {
    constructor(Model: Model, connection: any);
    Model: Model;
    connectionString: any;
    /**
     * Reference to database provider
     */
    db: any;
    /**
     * Reference to query builder with pre selected table
     */
    query: any;
    /**
     * Relations to be eagerloaded
     *
     * @type {Object}
     */
    _eagerLoads: any;
    /**
     * The sideloaded data for this query
     *
     * @type {Array}
     */
    _sideLoaded: any[];
    /**
     * Query level visible fields
     *
     * @type {Array}
     */
    _visibleFields: any[];
    /**
     * Query level hidden fields
     *
     * @type {Array}
     */
    _hiddenFields: any[];
    /**
     * Storing the counter for how many withCount queries
     * have been made by this query builder chain.
     *
     * This is required so that self joins have generate
     * unique table names
     *
     * @type {Number}
     */
    _withCountCounter: number;
    /**
     * Reference to the global scopes iterator. A fresh instance
     * needs to be used for each query
     */
    scopesIterator: any;
    /**
     * Makes a whereExists query on the parent model by
     * checking the relationships existence with a
     * relationship
     *
     * @method _has
     *
     * @param  {String}   relation
     * @param  {String}   method
     * @param  {String}   expression
     * @param  {Mixed}    value
     * @param  {String}   rawWhere
     * @param  {Function} callback
     *
     * @return {Boolean}
     *
     * @private
     */
    private _has;
    /**
     * Parses the relation string passed to `has`, `whereHas`
     * methods and returns the relationship instance with
     * nested relations (if any)
     *
     * @method _parseRelation
     *
     * @param  {String}       relation
     *
     * @return {Object}
     *
     * @private
     */
    private _parseRelation;
    /**
     * This method will apply all the global query scopes
     * to the query builder
     *
     * @method applyScopes
     *
     * @private
     */
    private _applyScopes;
    /**
     * Maps all rows to model instances
     *
     * @method _mapRowsToInstances
     *
     * @param  {Array}            rows
     *
     * @return {Array}
     *
     * @private
     */
    private _mapRowsToInstances;
    /**
     * Maps a single row to model instance
     *
     * @method _mapRowToInstance
     *
     * @param  {Object}          row
     *
     * @return {Model}
     */
    _mapRowToInstance(row: any): Model;
    /**
     * Eagerload relations for all model instances
     *
     * @method _eagerLoad
     *
     * @param  {Array}   modelInstance
     *
     * @return {void}
     *
     * @private
     */
    private _eagerLoad;
    /**
     * Access of query formatter
     *
     * @method formatter
     *
     * @return {Object}
     */
    formatter(): any;
    /**
     * Instruct query builder to ignore all global
     * scopes.
     *
     * Passing `*` will ignore all scopes or you can
     * pass an array of scope names.
     *
     * @param {Array} [scopes = ['*']]
     *
     * @method ignoreScopes
     *
     * @chainable
     */
    ignoreScopes(scopes?: any[]): QueryBuilder<TModel>;
    /**
     * Execute the query builder chain by applying global scopes
     *
     * @method fetch
     * @async
     *
     * @return {Serializer} Instance of model serializer
     */
    fetch(): Promise<Serializer>;
    /**
     * Returns the first row from the database.
     *
     * @method first
     * @async
     *
     * @return {Model|Null}
     */
    // first<T>(this: Constructor<T>): T
    first(): Promise<TModel | null>;
    /**
     * Returns the latest row from the database.
     *
     * @method last
     * @async
     *
     * @param  {String} field
     *
     * @return {Model|Null}
     */
    last(field?: string): Promise<TModel | null>;
    /**
     * Throws an exception when unable to find the first
     * row for the built query
     *
     * @method firstOrFail
     * @async
     *
     * @return {Model}
     *
     * @throws {ModelNotFoundException} If unable to find first row
     */
    firstOrFail(): Promise<TModel>;
    /**
     * Paginate records, same as fetch but returns a
     * collection with pagination info
     *
     * @method paginate
     * @async
     *
     * @param  {Number} [page = 1]
     * @param  {Number} [limit = 20]
     *
     * @return {Serializer}
     */
    paginate(page?: number, limit?: number): any;
    /**
     * Execute insert query
     *
     * @method insert
     *
     * @param  {Object} attributes
     *
     * @return {Array}
     */
    insert(attributes: any): Promise<any[]>;
    /**
     * Bulk update data from query builder. This method will also
     * format all dates and set `updated_at` column
     *
     * @method update
     * @async
     *
     * @param  {Object|Model} valuesOrModelInstance
     *
     * @return {Promise}
     */
    update(valuesOrModelInstance: any | Model): Promise<any>;
    /**
     * Deletes the rows from the database.
     *
     * @method delete
     * @async
     *
     * @return {Promise}
     */
    delete(): Promise<any>;
    /**
     * Remove everything from table
     *
     * @method truncate
     *
     * @return {Number}
     */
    truncate(): Promise<number>;
    /**
     * Returns an array of primaryKeys
     *
     * @method ids
     * @async
     *
     * @return {Array}
     */
    ids(): any[];
    /**
     * Returns a pair of lhs and rhs. This method will not
     * eagerload relationships.
     *
     * @method pair
     * @async
     *
     * @param  {String} lhs
     * @param  {String} rhs
     *
     * @return {Object}
     */
    pair(lhs: string, rhs: string): any;
    /**
     * Same as `pick` but inverse
     *
     * @method pickInverse
     * @async
     *
     * @param  {Number}    [limit = 1]
     *
     * @return {Collection}
     */
    pickInverse(limit?: number): Collection;
    /**
     * Pick x number of rows from the database
     *
     * @method pick
     * @async
     *
     * @param  {Number} [limit = 1]
     *
     * @return {Collection}
     */
    pick(limit?: number): Collection;
    /**
     * Eagerload relationships when fetching the parent
     * record
     *
     * @method with
     *
     * @param  {String}   relation
     * @param  {Function} [callback]
     *
     * @chainable
     */
    with(relation: string, callback?: Function): QueryBuilder<TModel>;
    /**
     * Adds a check on there parent model to fetch rows
     * only where related rows exists or as per the
     * defined number
     *
     * @method has
     *
     * @param  {String}  relation
     * @param  {String}  expression
     * @param  {Mixed}   value
     *
     * @chainable
     */
    has(relation: string, expression: string, value: Mixed): QueryBuilder<TModel>;
    /**
     * Similar to `has` but instead adds or clause
     *
     * @method orHas
     *
     * @param  {String} relation
     * @param  {String} expression
     * @param  {Mixed} value
     *
     * @chainable
     */
    orHas(relation: string, expression: string, value: Mixed): QueryBuilder<TModel>;
    /**
     * Adds a check on the parent model to fetch rows where
     * related rows doesn't exists
     *
     * @method doesntHave
     *
     * @param  {String}   relation
     *
     * @chainable
     */
    doesntHave(relation: string): QueryBuilder<TModel>;
    /**
     * Same as `doesntHave` but adds a `or` clause.
     *
     * @method orDoesntHave
     *
     * @param  {String}   relation
     *
     * @chainable
     */
    orDoesntHave(relation: string): QueryBuilder<TModel>;
    /**
     * Adds a query constraint just like has but gives you
     * a chance to pass a callback to add more constraints
     *
     * @method whereHas
     *
     * @param  {String}   relation
     * @param  {Function} callback
     * @param  {String}   expression
     * @param  {String}   value
     *
     * @chainable
     */
    whereHas(relation: string, callback?: Function, expression?: string, value?: string): QueryBuilder<TModel>;
    /**
     * Same as `whereHas` but with `or` clause
     *
     * @method orWhereHas
     *
     * @param  {String}   relation
     * @param  {Function} callback
     * @param  {String}   expression
     * @param  {Mixed}   value
     *
     * @chainable
     */
    orWhereHas(relation: string, callback?: Function, expression?: string, value?: Mixed): QueryBuilder<TModel>;
    /**
     * Opposite of `whereHas`
     *
     * @method whereDoesntHave
     *
     * @param  {String}        relation
     * @param  {Function}      callback
     *
     * @chainable
     */
    whereDoesntHave(relation: string, callback: Function): QueryBuilder<TModel>;
    /**
     * Same as `whereDoesntHave` but with `or` clause
     *
     * @method orWhereDoesntHave
     *
     * @param  {String}          relation
     * @param  {Function}        callback
     *
     * @chainable
     */
    orWhereDoesntHave(relation: string, callback: Function): QueryBuilder<TModel>;
    /**
     * Returns count of a relationship
     *
     * @method withCount
     *
     * @param  {String}   relation
     * @param  {Function} callback
     *
     * @chainable
     *
     * @example
     * ```js
     * query().withCount('profile')
     * query().withCount('profile as userProfile')
     * ```
     */
    withCount(relation: string, callback?: Function): QueryBuilder<TModel>;
    /**
     * Define fields to be visible for a single
     * query.
     *
     * Computed when `toJSON` is called
     *
     * @method setVisible
     *
     * @param  {Array}   fields
     *
     * @chainable
     */
    setVisible(fields: any[]): QueryBuilder<TModel>;
    /**
     * Define fields to be hidden for a single
     * query.
     *
     * Computed when `toJSON` is called
     *
     * @method setHidden
     *
     * @param  {Array}   fields
     *
     * @chainable
     */
    setHidden(fields: any[]): QueryBuilder<TModel>;
    /**
     * Create a clone of Query builder
     *
     * @method clone
     *
     * @return {QueryBuilde}
     */
    clone(): QueryBuilder<TModel>;
}
//# sourceMappingURL=index.d.ts.map