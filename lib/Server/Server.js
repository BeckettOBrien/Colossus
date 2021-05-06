/** TODO
 * Get autocomplete to work with req and res(maybe see https: //github.com/expressjs/express/blob/master/lib/request.js?)
 */

// HTTP require
const http = require('http');
let r;

// Request type definitions
const methodMap = {
    uses: [],
    gets: [],
    heads: [],
    posts: [],
    puts: [],
    deletes: [],
    connects: [],
    options: [],
    traces: [],
    patches: [],
    catchall: () => {}
};

// Define necessary globals
let toCatch = 1;
let toRun;
let pluginsEnabled = false;
const plugins = [];

class Params {
    constructor() {
        this.request = http.IncomingMessage.prototype;
        this.response = http.ServerResponse.prototype;
    }
    async setRequest(toSet) {
        this.request = toSet;
    }
    async setResponse(toSet) {
        this.response = toSet;
    }
}

let params = new Params();

class Handlers {
    async plugins() {
        plugins.forEach(async (plugin) => {
            var res = await plugin(params.request, params.response);
            if (res != undefined) {
                if (res.req != undefined) {
                    params.setRequest(res.req);
                }
                if (res.res != undefined) {
                    params.setResponse(res.res);
                }
            }
        });
        return;
    }
    async requestH() {
        methodMap.uses.forEach((server) => {
            if (params.request.url == Object.keys(server)[0]) {
                toCatch = 0;
                return toRun = Object.values(server)[0];
            }
        });
        switch (params.request.method) {
            case 'GET':
                methodMap.gets.forEach((server) => {
                    if (params.request.url == Object.keys(server)[0]) {
                        toCatch = 0;
                        toRun = Object.values(server)[0];
                    }
                });
                break;
            case 'HEAD':
                methodMap.heads.forEach((server) => {
                    if (params.request.url == Object.keys(server)[0]) {
                        toCatch = 0;
                        toRun = Object.values(server)[0];
                    }
                });
                break;
            case 'POST':
                methodMap.posts.forEach((server) => {
                    if (params.request.url == Object.keys(server)[0]) {
                        toCatch = 0;
                        toRun = Object.values(server)[0];;
                    }
                });
                break;
            case 'PUT':
                methodMap.puts.forEach((server) => {
                    if (params.request.url == Object.keys(server)[0]) {
                        toCatch = 0;
                        toRun = Object.values(server)[0];
                    }
                });
                break;
            case 'DELETE':
                methodMap.deletes.forEach((server) => {
                    if (params.request.url == Object.keys(server)[0]) {
                        toCatch = 0;
                        toRun = Object.values(server)[0];
                    }
                });
                break;
            case 'CONNECT':
                methodMap.connects.forEach((server) => {
                    if (params.request.url == Object.keys(server)[0]) {
                        toCatch = 0;
                        toRun = Object.values(server)[0];
                    }
                });
                break;
            case 'OPTIONS':
                methodMap.options.forEach((server) => {
                    if (params.request.url == Object.keys(server)[0]) {
                        toCatch = 0;
                        toRun = Object.values(server)[0];
                    }
                });
                break;
            case 'TRACE':
                methodMap.traces.forEach((server) => {
                    if (params.request.url == Object.keys(server)[0]) {
                        toCatch = 0;
                        toRun = Object.values(server)[0];
                    }
                });
                break;
            case 'PATCH':
                methodMap.patches.forEach((server) => {
                    if (params.request.url == Object.keys(server)[0]) {
                        toCatch = 0;
                        toRun = Object.values(server)[0];
                    }
                });
                break;
        }
    }
}

/**
 * Basic server class
 */
class Server {
    /**
     * Create Catchall for 404s
     * @param {Function} value
     */
    get req() {
        return request;
    }
    /**
     * Create Catchall for 404s
     * @param {Function} value
     */
    async catchall(value) {
        methodMap.catchall = value
    }
    /**
     * Create Request with any method
     * @param {String} name Name of endpoint
     * @param {Function} value Function to run when endpoint is called
     */
    async use(name, value) {
        let toPush = {}
        toPush[name] = value;
        methodMap.uses.push(toPush);
    }
    /**
     * Create GET request
     * @param {String} name Name of endpoint
     * @param {Function} value Function to run when endpoint is called
     */
    async get(name, value) {
        let toPush = {}
        toPush[name] = value;
        methodMap.gets.push(toPush);
    }
    /**
     * Create HEAD request
     * @param {String} name Name of endpoint
     * @param {Function} value Function to run when endpoint is called
     */
    async head(name, value) {
        let toPush = {}
        toPush[name] = value;
        methodMap.heads.push(toPush);
    }
    /**
     * Create POST request
     * @param {String} name Name of endpoint
     * @param {Function} value Function to run when endpoint is called
     */
    async post(name, value) {
        let toPush = {}
        toPush[name] = value;
        methodMap.posts.push(toPush);
    }
    /**
     * Create PUT request
     * @param {String} name Name of endpoint
     * @param {Function} value Function to run when endpoint is called
     */
    async put(name, value) {
        let toPush = {}
        toPush[name] = value;
        methodMap.puts.push(toPush);
    }
    /**
     * Create DELETE request
     * @param {String} name Name of endpoint
     * @param {Function} value Function to run when endpoint is called
     */
    async delete(name, value) {
        let toPush = {}
        toPush[name] = value;
        methodMap.deletes.push(toPush);
    }
    /**
     * Create CONNECT request
     * @param {String} name Name of endpoint
     * @param {Function} value Function to run when endpoint is called
     */
    async connect(name, value) {
        let toPush = {}
        toPush[name] = value;
        methodMap.connects.push(toPush);
    }
    /**
     * Create OPTIONS request
     * @param {String} name Name of endpoint
     * @param {Function} value Function to run when endpoint is called
     */
    async options(name, value) {
        let toPush = {}
        toPush[name] = value;
        methodMap.options.push(toPush);
    }
    /**
     * Create TRACE request
     * @param {String} name Name of endpoint
     * @param {Function} value Function to run when endpoint is called
     */
    async trace(name, value) {
        let toPush = {}
        toPush[name] = value;
        methodMap.traces.push(toPush);
    }
    /**
     * Create PATCH request
     * @param {String} name Name of endpoint
     * @param {Function} value Function to run when endpoint is called
     */
    async patch(name, value) {
        let toPush = {}
        toPush[name] = value;
        methodMap.patches.push(toPush);
    }

    /**
     * Starts a server instance.
     * @param {} port
     */
    async start(port) {
        let handlers = new Handlers();
        http.createServer(async function (req, res) {
            params.setRequest(req);
            params.setResponse(res);
            if (pluginsEnabled == true) {
                await handlers.plugins();
            }
            await handlers.requestH().then(() => {
                if (methodMap.catchall != (() => {}) && toCatch == 1) {
                    toRun = methodMap.catchall;
                }
            });
            toRun(params.request, params.response);
            toRun = undefined;
            toCatch = 1;
            params.setRequest(undefined);
            params.setResponse(undefined);
            return;
        }).listen(port);
    }
}

class Plugins {
    /**
     * Enable plugins
     */
    async enable() {
        pluginsEnabled = true;
    }
    /**
     * Disable plugins
     */
    async disable() {
        pluginsEnabled = false;
    }
    /**
     * Get methodMap
     */
    async methodMap() {
        return methodMap;
    }
    /**
     * Get all Plugins
     */
    async plugins() {
        return plugins;
    }
    /**
     * Add plugin
     * @param {Function} plugin
     */
    async add(plugin) {
        plugins.push(plugin);
    }
}

module.exports = {
    Server: new Server(),
    Plugins: new Plugins()
}