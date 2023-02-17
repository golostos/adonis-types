export = Task;
type Logger = any
/**
 * @module Task
 * @description Task base class
 */
declare class Task {
    /**
     * @return {Array}
     */
    static get inject(): any[];
    /**
     * Set enable use .lock file for block run retry task
     * Lock file save to `tmpPath()`
     *
     * @return {Boolean}
     */
    static get useLock(): boolean;
    /**
     * Set enable use prefix for logging
     *
     * @return {Boolean}
     */
    static get useLogPrefix(): boolean;
    /**
     * Set log driver. By default is used value from config `app.logger.driver`
     * You can set any value from app.logger drivers
     *
     * @return {null|String}
     */
    static get loggerDriver(): string;
    /**
     * @param {Object} Helpers
     * @param {Object} Logger
     */
    constructor(Helpers: any, Logger: any);
    Helpers: any;
    Logger: any;
    name: string;
    locker: Locker;
    loggerInstance: Logger;
    startedAt: Date;
    /**
     * Example input JasperEventsDrop
     * Example output jasper:events:drop
     *
     * @return {String}
     * @private
     */
    private _getName;
    /**
     * @return {Logger}
     * @private
     */
    private _getLogger;
    /**
     * @return {Locker}
     * @private
     */
    private _getLocker;
    /**
     * @return {void}
     */
    _run(): void;
    /**
     * Get task running time duration
     *
     * @param {Boolean} [source]    Set true for return milliseconds value number
     * @return {Number}
     */
    duration(source?: boolean): number;
    /**
     * Need set task name
     * It's create methods:
     *
     * Task.debug(message, ...options)
     * Task.info(message, ...options)
     * Task.notice(message, ...options)
     * and etc... see Adonis/Src/Logger
     *
     * @private
     */
    private _extendLogger;
    log: (level: any, ...args: any[]) => void;
    /**
     * @param {Array} args
     * @private
     */
    private _addLogPrefix;
}
import Locker = require("./Locker");
