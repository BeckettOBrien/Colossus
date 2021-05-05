// HTTP require
const http = require('http');

// Request type definitions
const methodMap = {
    all: [],
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

async function handle(request) {
    methodMap.uses.forEach((server) => {
        if (request.url == Object.keys(server)[0]) {
            toCatch = 0;
            return toRun = Object.values(server)[0];
        }
    });
    switch (request.method) {
        case 'GET':
            methodMap.gets.forEach((server) => {
                if (request.url == Object.keys(server)[0]) {
                    toCatch = 0;
                    toRun = Object.values(server)[0];
                }
            });
            break;
        case 'HEAD':
            methodMap.heads.forEach((server) => {
                if (request.url == Object.keys(server)[0]) {
                    toCatch = 0;
                    toRun = Object.values(server)[0];
                }
            });
            break;
        case 'POST':
            methodMap.posts.forEach((server) => {
                if (request.url == Object.keys(server)[0]) {
                    toCatch = 0;
                    toRun = Object.values(server)[0];;
                }
            });
            break;
        case 'PUT':
            methodMap.puts.forEach((server) => {
                if (request.url == Object.keys(server)[0]) {
                    toCatch = 0;
                    toRun = Object.values(server)[0];
                }
            });
            break;
        case 'DELETE':
            methodMap.deletes.forEach((server) => {
                if (request.url == Object.keys(server)[0]) {
                    toCatch = 0;
                    toRun = Object.values(server)[0];
                }
            });
            break;
        case 'CONNECT':
            methodMap.connects.forEach((server) => {
                if (request.url == Object.keys(server)[0]) {
                    toCatch = 0;
                    toRun = Object.values(server)[0];
                }
            });
            break;
        case 'OPTIONS':
            methodMap.options.forEach((server) => {
                if (request.url == Object.keys(server)[0]) {
                    toCatch = 0;
                    toRun = Object.values(server)[0];
                }
            });
            break;
        case 'TRACE':
            methodMap.traces.forEach((server) => {
                if (request.url == Object.keys(server)[0]) {
                    toCatch = 0;
                    toRun = Object.values(server)[0];
                }
            });
            break;
        case 'PATCH':
            methodMap.patches.forEach((server) => {
                if (request.url == Object.keys(server)[0]) {
                    toCatch = 0;
                    toRun = Object.values(server)[0];
                }
            });
            break;
    }
}

/**
 * Basic server class
 */
class Server {
    /**
     * Create Catchall for 404s
     * @param Function value
     */
    async catchall(value) {
        methodMap.catchall = value
    }
    /**
     * Create Request with any method
     * @param String name
     * @param Function value
     */
    async use(name, value) {
        let toPush = {}
        toPush[name] = value;
        methodMap.uses.push(toPush);
    }
    /**
     * Create GET request
     * @param String name
     * @param Function value
     */
    async get(name, value) {
        let toPush = {}
        toPush[name] = value;
        methodMap.all.push(toPush);
        methodMap.gets.push(toPush);
    }
    /**
     * Create HEAD request
     * @param String name
     * @param Function value
     */
    async head(name, value) {
        let toPush = {}
        toPush[name] = value;
        methodMap.all.push(toPush);
        methodMap.heads.push(toPush);
    }
    /**
     * Create POST request
     * @param String name
     * @param Function value
     */
    async post(name, value) {
        let toPush = {}
        toPush[name] = value;
        methodMap.all.push(toPush);
        methodMap.posts.push(toPush);
    }
    /**
     * Create PUT request
     * @param String name
     * @param Function value
     */
    async put(name, value) {
        let toPush = {}
        toPush[name] = value;
        methodMap.all.push(toPush);
        methodMap.puts.push(toPush);
    }
    /**
     * Create DELETE request
     * @param String name
     * @param Function value
     */
    async delete(name, value) {
        let toPush = {}
        toPush[name] = value;
        methodMap.all.push(toPush);
        methodMap.deletes.push(toPush);
    }
    /**
     * Create CONNECT request
     * @param String name
     * @param Function value
     */
    async connect(name, value) {
        let toPush = {}
        toPush[name] = value;
        methodMap.all.push(toPush);
        methodMap.connects.push(toPush);
    }
    /**
     * Create OPTIONS request
     * @param String name
     * @param Function value
     */
    async options(name, value) {
        let toPush = {}
        toPush[name] = value;
        methodMap.all.push(toPush);
        methodMap.options.push(toPush);
    }
    /**
     * Create TRACE request
     * @param String name
     * @param Function value
     */
    async trace(name, value) {
        let toPush = {}
        toPush[name] = value;
        methodMap.all.push(toPush);
        methodMap.traces.push(toPush);
    }
    /**
     * Create PATCH request
     * @param String name
     * @param Function value
     */
    async patch(name, value) {
        let toPush = {}
        toPush[name] = value;
        methodMap.all.push(toPush);
        methodMap.patches.push(toPush);
    }

    /**
     * Starts a server instance.
     * @param Number port
     */
    async start(port) {
        http.createServer(async function (request, response) {
            await handle(request).then(() => {
                if (methodMap.catchall != (() => {}) && toCatch == 1) {
                    toRun = methodMap.catchall;
                }
            });
            toRun(request, response);
            toRun = undefined;
            toCatch = 1;
            return;
        }).listen(port);
    }
}

module.exports = Server;