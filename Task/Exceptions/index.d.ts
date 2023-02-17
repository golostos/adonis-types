/**
 * Class to throw runtime exceptions
 *
 * @class RuntimeException
 * @constructor
 */
export class RuntimeException {
    /**
     * This exception is raised when task an undefined schedule
     *
     * @method undefinedTaskSchedule
     *
     * @param  {String}          task
     *
     * @return {Object}
     */
    static undefinedTaskSchedule(task: string): any;
    /**
     * This exception is raised when task an undefined handle
     *
     * @method undefinedTaskHandle
     *
     * @param  {String}          task
     *
     * @return {Object}
     */
    static undefinedTaskHandle(task: string): any;
    /**
     * This exception is raised when task an undefined handle
     *
     * @method undefinedInstanceTask
     *
     * @param  {String}          task
     *
     * @return {Object}
     */
    static undefinedInstanceTask(task: string): any;
    /**
     * This exception is raised when task an undefined handle
     *
     * @method notFoundTask
     *
     * @param  {String}          dir
     *
     * @return {Object}
     */
    static notFoundTask(dir: string): any;
}
