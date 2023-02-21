export = Request;
declare class Request {
    _headers: {};
    _basicAuth: string;
    _auth: string;
    _isJson: boolean;
    /**
     * Accept json
     *
     * @method isJson
     *
     * @chainable
     */
    acceptJson(): Request;
    /**
     * Set auth header
     *
     * @method auth
     *
     * @param  {String} val
     *
     * @chainable
     */
    auth(val: string): Request;
    /**
     * Set basic auth onrequest headers
     *
     * @method basicAuth
     *
     * @param  {String}  val
     *
     * @chainable
     */
    basicAuth(val: string): Request;
    /**
     * Set headers on request
     *
     * @method headers
     *
     * @param  {Object} headers
     *
     * @chainable
     */
    headers(headers: any): Request;
    /**
     * Make a post http request
     *
     * @method post
     *
     * @param  {String} url
     * @param  {Object} body
     *
     * @return {void}
     */
    post(url: string, body: any): void;
}
