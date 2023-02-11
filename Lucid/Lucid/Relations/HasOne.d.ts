export = HasOne;
/**
 * The HasOne relationship defines a relation between
 * two models
 *
 * @class HasOne
 * @constructor
 */
declare class HasOne extends BaseRelation {
    /**
     * Persists the parent model instance if it's not
     * persisted already. This is done before saving
     * the related instance
     *
     * @method _persistParentIfRequired
     *
     * @param {Object} [trx]
     *
     * @return {void}
     *
     * @private
     */
    private _persistParentIfRequired;
    /**
     * Returns an array of values to be used for running
     * whereIn query when eagerloading relationships.
     *
     * @method mapValues
     *
     * @param  {Array}  modelInstances - An array of model instances
     *
     * @return {Array}
     */
    mapValues(modelInstances: any[]): any[];
    /**
     * Takes an array of related instances and returns an array
     * for each parent record.
     *
     * @method group
     *
     * @param  {Array} relatedInstances
     *
     * @return {Object} @multiple([key=String, values=Array, defaultValue=Null])
     */
    group(relatedInstances: any[]): any;
    /**
     * Fetch related rows for a relationship
     *
     * @method fetch
     *
     * @alias first
     *
     * @return {Model}
     */
    fetch(): Model;
    /**
     * Adds a where clause to limit the select search
     * to related rows only.
     *
     * @method relatedWhere
     *
     * @param  {Boolean}     count
     *
     * @return {Object}
     */
    relatedWhere(count: boolean): any;
    /**
     * Adds `on` clause to the innerjoin context. This
     * method is mainly used by HasManyThrough
     *
     * @method addWhereOn
     *
     * @param  {Object}   context
     */
    addWhereOn(context: any): void;
    /**
     * Saves the related instance to the database. Foreign
     * key is set automatically.
     *
     * NOTE: This method will persist the parent model if
     * not persisted already.
     *
     * @method save
     *
     * @param  {Object}  relatedInstance
     * @param  {Object}  [trx]
     *
     * @return {Promise}
     */
    save(relatedInstance: any, trx?: any): Promise<any>;
    /**
     * Creates the new related instance model and persist
     * it to database. Foreign key is set automatically.
     *
     * NOTE: This method will persist the parent model if
     * not persisted already.
     *
     * @method create
     * @param  {Object}  [trx]
     *
     * @param  {Object} payload
     *
     * @return {Promise}
     */
    create(payload: any, trx?: any): Promise<any>;
    createMany(): void;
    saveMany(): void;
}
import BaseRelation = require("@adonisjs/lucid/src/Lucid/Relations/BaseRelation");
//# sourceMappingURL=HasOne.d.ts.map