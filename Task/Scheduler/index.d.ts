export = Scheduler;
/**
 * @module Scheduler
 * @description Task scheduler provider using node-schedule
 */
declare class Scheduler {
    /**
     * @return {Array}
     */
    static get inject(): any[];
    /**
     * @param {Object} Helpers
     */
    constructor(Helpers: any);
    Helpers: any;
    instance: any;
    registeredTasks: any[];
    /**
     * Configure tasks absolute path for app
     * /<project-dir>/app/Tasks
     *
     * @private
     */
    private _configureTasksPath;
    tasksPath: any;
    /**
     * Load task file
     *
     * @param {String} file
     * @private
     */
    private _fetchTask;
    /**
     * Register scheduled tasks for every task found in app/Tasks
     *
     * @public
     */
    public run(): Promise<void>;
}
