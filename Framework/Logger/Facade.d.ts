export = LoggerFacade;
import Logger, { TransportName } from "./index";

/**
 * LoggerFacade is exposed by IoC container and it proxy
 * methods over @ref('Logger') class.
 *
 * @group Core
 * @binding Adonis/Src/Logger
 * @alias Logger
 *
 * @class LoggerFacade
 * @constructor
 */
declare class LoggerFacade extends Logger {
    constructor(Config: any);
    Config: any;
    _loggerInstances: {};
    /**
     * Returns the @ref('Logger') class instance for a given
     * transport.
     *
     * @method transport
     *
     * @param  {TransportName}  name
     *
     * @return {Logger}
     */
    transport(name: TransportName): Logger;
}

//# sourceMappingURL=Facade.d.ts.map