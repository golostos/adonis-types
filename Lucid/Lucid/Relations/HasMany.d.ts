export = HasMany;
/**
 * HasMany relationship instance is used to define a
 * has many relation. The instance of this class
 * is obtained via @ref(Model.hasMany) method.
 *
 * @class HasMany
 * @constructor
 */
declare class HasMany<TModel extends Model> extends BaseRelation<TModel> {
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
     * Adds a where clause to limit the select search
     * to related rows only.
     *
     * @method relatedWhere
     *
     * @param  {Boolean}     count
     * @param  {Number}      counter
     *
     * @return {Object}
     */
    relatedWhere(count: boolean, counter: number): any;
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
     * key is set automatically
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
     * it to database. Foreign key is set automatically
     *
     * @method create
     *
     * @param  {Object} payload
     * @param  {Object}  [trx]
     *
     * @return {Promise}
     */
    create(payload: any, trx?: any): Promise<any>;
    /**
     * Creates an array of model instances in parallel
     *
     * @method createMany
     *
     * @param  {Array}   arrayOfPayload
     * @param  {Object}  [trx]
     *
     * @return {Array}
     */
    createMany(arrayOfPayload: any[], trx?: any): any[];
    /**
     * Creates an array of model instances in parallel
     *
     * @method createMany
     *
     * @param  {Array}   arrayOfRelatedInstances
     * @param  {Object}  [trx]
     *
     * @return {Array}
     */
    saveMany(arrayOfRelatedInstances: any[], trx?: any): any[];
}
import Model = require('../Model');
import BaseRelation = require("./BaseRelation");
//# sourceMappingURL=HasMany.d.ts.map