export namespace task {
    /**
     * Returns data for the task template
     *
     * @method getData
     * @param  {String}    name
     * @return {Object}
     */
    function getData(name: string): any;
    /**
     * Returns file name for the command file
     *
     * @method getFileName
     * @param  {String}    name
     * @return {String}
     */
    function getFileName(name: string): string;
    /**
     * Returns file path for the command file
     *
     * @method getFilePath
     * @param  {String}    name
     * @param  {Object}    options
     * @return {String}
     */
    function getFilePath(name: string, options: any): string;
}
