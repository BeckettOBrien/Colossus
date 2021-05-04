// HTTP require
const http = require('http');

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
    catchall: []
};

/**
 * Basic server class
 */
class Server {
    /**
     * Create Catchall for 404s
     * @param Function value
     */
    async catchall(value) {
        let toPush = {}
        toPush["catchall"] = value;
        methodMap.catchall.push(toPush);
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
        methodMap.patches.push(toPush);
    }

    /**
     * Starts a server instance.
     * @param Number port
     */
    async start(port) {
        http.createServer(function(request, response) {
            let toCatch = 1;
            methodMap.uses.forEach((server) => {
                if (request.url == Object.keys(server)[0]) {
                    toCatch = 0;
                    return Object.values(server)[0](request, response);
                }
            });
            switch (request.method) {
                case 'GET':
                    methodMap.gets.forEach((server) => {
                        if (request.url == Object.keys(server)[0]) {
                            toCatch = 0;
                            return Object.values(server)[0](request, response);
                        }
                    });
                case 'HEAD':
                    methodMap.heads.forEach((server) => {
                        if (request.url == Object.keys(server)[0]) {
                            toCatch = 0;
                            return Object.values(server)[0](request, response);
                        }
                    });
                case 'POST':
                    methodMap.posts.forEach((server) => {
                        if (request.url == Object.keys(server)[0]) {
                            toCatch = 0;
                            return Object.values(server)[0](request, response);
                        }
                    });
                case 'PUT':
                    methodMap.puts.forEach((server) => {
                        if (request.url == Object.keys(server)[0]) {
                            toCatch = 0;
                            return Object.values(server)[0](request, response);
                        }
                    });
                case 'DELETE':
                    methodMap.deletes.forEach((server) => {
                        if (request.url == Object.keys(server)[0]) {
                            toCatch = 0;
                            return Object.values(server)[0](request, response);
                        }
                    });
                case 'CONNECT':
                    methodMap.connects.forEach((server) => {
                        if (request.url == Object.keys(server)[0]) {
                            toCatch = 0;
                            return Object.values(server)[0](request, response);
                        }
                    });
                case 'OPTIONS':
                    methodMap.options.forEach((server) => {
                        if (request.url == Object.keys(server)[0]) {
                            toCatch = 0;
                            return Object.values(server)[0](request, response);
                        }
                    });
                case 'TRACE':
                    methodMap.traces.forEach((server) => {
                        if (request.url == Object.keys(server)[0]) {
                            toCatch = 0;
                            return Object.values(server)[0](request, response);
                        }
                    });
                case 'PATCH':
                    methodMap.patches.forEach((server) => {
                        if (request.url == Object.keys(server)[0]) {
                            toCatch = 0;
                            return Object.values(server)[0](request, response);
                        }
                    });
            }
            if (methodMap.catchall.toString() != "" && toCatch == 1) {
                let toUse;
                for (const c in methodMap.catchall) {
                    toUse = c;
                }
                console.log(methodMap.catchall)
                let val = Object.values(methodMap.catchall[toUse]);
                return val[0](request, response);
            }
        }).listen(port);
    }
}

module.exports = Server;