// HTTP require
const http = require('http');

// Request type definitions
let uses = [];
let gets = [];
let heads = [];
let posts = [];
let puts = [];
let deletes = [];
let connects = [];
let options = [];
let traces = [];
let patches = [];
let catchall = [];

class Server {
    /**     * Create Catchall for 404s
     * @param Function value
    **/
    async catchall(value) {
        var toPush = {}
        toPush["catchall"] = value;
        catchall.push(toPush);
    }
    /**     * Create Request with any method
     * @param String name
     * @param Function value
    **/
    async use(name, value) {
        var toPush = {}
        toPush[name] = value;
        uses.push(toPush);
    }
    /**     * Create GET request
     * @param String name
     * @param Function value
    **/
    async get(name, value) {
        var toPush = {}
        toPush[name] = value;
        gets.push(toPush);
    }
    /**     * Create HEAD request
     * @param String name
     * @param Function value
    **/
    async head(name, value) {
        var toPush = {}
        toPush[name] = value;
        heads.push(toPush);
    }
    /**     * Create POST request
     * @param String name
     * @param Function value
    **/
    async post(name, value) {
        var toPush = {}
        toPush[name] = value;
        posts.push(toPush);
    }
    /**     * Create PUT request
     * @param String name
     * @param Function value
    **/
    async put(name, value) {
        var toPush = {}
        toPush[name] = value;
        puts.push(toPush);
    }
    /**     * Create DELETE request
     * @param String name
     * @param Function value
    **/
    async delete(name, value) {
        var toPush = {}
        toPush[name] = value;
        deletes.push(toPush);
    }
    /**     * Create CONNECT request
     * @param String name
     * @param Function value
    **/
    async connect(name, value) {
        var toPush = {}
        toPush[name] = value;
        connects.push(toPush);
    }
    /**     * Create OPTIONS request
     * @param String name
     * @param Function value
    **/
    async options(name, value) {
        var toPush = {}
        toPush[name] = value;
        options.push(toPush);
    }
    /**     * Create TRACE request
     * @param String name
     * @param Function value
    **/
    async trace(name, value) {
        var toPush = {}
        toPush[name] = value;
        traces.push(toPush);
    }
    /**     * Create PATCH request
     * @param String name
     * @param Function value
    **/
    async patch(name, value) {
        var toPush = {}
        toPush[name] = value;
        patches.push(toPush);
    }
    async start(port) {
        http.createServer(function(request, response) {
            let toCatch = 1;
            uses.forEach((server) => {
                if (request.url == Object.keys(server)[0]) {
                    toCatch = 0;
                    return Object.values(server)[0](request, response);
                }
            });
            switch (request.method) {
                case 'GET':
                    gets.forEach((server) => {
                        if (request.url == Object.keys(server)[0]) {
                            toCatch = 0;
                            return Object.values(server)[0](request, response);
                        }
                    });
                case 'HEAD':
                    heads.forEach((server) => {
                        if (request.url == Object.keys(server)[0]) {
                            toCatch = 0;
                            return Object.values(server)[0](request, response);
                        }
                    });
                case 'POST':
                    posts.forEach((server) => {
                        if (request.url == Object.keys(server)[0]) {
                            toCatch = 0;
                            return Object.values(server)[0](request, response);
                        }
                    });
                case 'PUT':
                    puts.forEach((server) => {
                        if (request.url == Object.keys(server)[0]) {
                            toCatch = 0;
                            return Object.values(server)[0](request, response);
                        }
                    });
                case 'DELETE':
                    deletes.forEach((server) => {
                        if (request.url == Object.keys(server)[0]) {
                            toCatch = 0;
                            return Object.values(server)[0](request, response);
                        }
                    });
                case 'CONNECT':
                    connects.forEach((server) => {
                        if (request.url == Object.keys(server)[0]) {
                            toCatch = 0;
                            return Object.values(server)[0](request, response);
                        }
                    });
                case 'OPTIONS':
                    options.forEach((server) => {
                        if (request.url == Object.keys(server)[0]) {
                            toCatch = 0;
                            return Object.values(server)[0](request, response);
                        }
                    });
                case 'TRACE':
                    traces.forEach((server) => {
                        if (request.url == Object.keys(server)[0]) {
                            toCatch = 0;
                            return Object.values(server)[0](request, response);
                        }
                    });
                case 'PATCH':
                    patches.forEach((server) => {
                        if (request.url == Object.keys(server)[0]) {
                            toCatch = 0;
                            return Object.values(server)[0](request, response);
                        }
                    });
            }
            if (catchall != [] && toCatch == 1) {
                let toUse;
                for (const c in catchall) {
                    toUse = c;
                }
                let val = Object.values(catchall[toUse]);
                return val[0](request, response);
            }
        }).listen(port);
    }
}

module.exports = Server;