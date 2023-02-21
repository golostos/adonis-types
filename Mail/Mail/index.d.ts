export = Mail;
import MailSender = require('./Sender')
/**
 * The mail class is used to grab an instance of
 * sender for a given connection and driver.
 *
 * @namespace Adonis/Addons/Mail
 * @alias Mail
 *
 * @class Mail
 * @constructor
 */
declare class Mail extends MailSender {
    constructor(Config: any, View: any);
    Config: any;
    View: any;
    _sendersPool: {};
    _fake: import("./Fake");
    /**
     * Returns an instance of a mail connection. Also this
     * method will cache the connection for re-usability.
     *
     * @method connection
     *
     * @param  {String}   name
     *
     * @return {Object}
     */
    connection(name: string): MailSender;
    /**
     * Setup a faker object, which will be used over
     * using the actual emailer methods
     *
     * @method fake
     *
     * @return {void}
     */
    fake(): void;
    /**
     * Restore faker object
     *
     * @method restore
     *
     * @return {void}
     */
    restore(): void;
}
