export = Locker;
declare class Locker {
    /**
     * @param {String} name
     * @param {String} lockDir
     */
    constructor(name: string, lockDir: string);
    name: string;
    lockDir: string;
    lockFilename: string;
    /**
     * @return {String}
     * @private
     */
    private _getLockFilePath;
    /**
     * @return {Promise}
     */
    check(): Promise<any>;
    /**
     * @return {Promise}
     */
    lock(): Promise<any>;
    /**
     * @return {Promise}
     */
    unlock(): Promise<any>;
}
