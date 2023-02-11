export = WinstonFile;
/**
 * @module Adonis
 * @submodule framework
 */
/**
 * Winston console transport driver for @ref('Logger')
 * All the logs will be written to the filename
 * defined inside config.
 *
 * @class WinstonFile
 * @constructor
 */
declare class WinstonFile {
    /**
     * Returns an array of dependencies to be injected
     * by IoC container.
     *
     * @attribute inject
     * @static
     *
     * @return {Array}
     */
    static get inject(): any[];
    constructor(Helpers: any);
    Helpers: any;
    /**
     * Set config. This method is called by Logger
     * manager by set config based upon the
     * transport in use.
     *
     * @method setConfig
     *
     * @param  {Object}  config
     */
    setConfig(config: any): void;
    config: any;
    /**
     * Creating new instance of winston with file transport
     */
    logger: winston.Logger;
    /**
     * A list of available log levels.
     *
     * @attribute levels
     *
     * @return {Object}
     */
    get levels(): any;
    /**
     * Update driver log level at runtime
     *
     * @param  {String} level
     *
     * @return {void}
     */
    set level(arg: string);
    /**
     * Returns the current level for the driver
     *
     * @attribute level
     *
     * @return {String}
     */
    get level(): string;
    /**
     * Log message for a given level
     *
     * @method log
     *
     * @param  {Number}    level
     * @param  {String}    msg
     * @param  {...Spread} meta
     *
     * @return {void}
     */
    log(level: number, msg: string, ...meta: Spread[]): void;
}
import winston = require("winston");
//# sourceMappingURL=File.d.ts.map