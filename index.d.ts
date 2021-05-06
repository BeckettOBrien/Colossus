import http from 'http';

// Global Colossus namespace
declare namespace Colossus {
  // Declares types for brevity
  type Incoming = http.IncomingMessage;
  type Outgoing = http.ServerResponse;
  type MethodMapKeys = "uses" | "gets" | "heads" | "posts" | "puts" | "deletes" | "connects" | "options" | "traces" | "patches" | "catchall";

  /* Private classes ahead... but needed for type spec */
  declare class Params {
    request: Incoming;
    response: Outgoing;

    async setRequest(r: Incoming);
    async setResponse(r: Outgoing);
  }

  declare class Handlers {
    async plugins();
    async requestH();
  }

  // Basic server class
  export declare class Server {
    get req(): Function;

    async catchall(f: Function);
    async use(m: string, f: Function);
    async get(m: string, f: Function);
    async head(m: string, f: Function);
    async post(m: string, f: Function);
    async put(m: string, f: Function);
    async delete(m: string, f: Function);
    async connect(m: string, f: Function);
    async options(m: string, f: Function);
    async trace(m: string, f: Function);

    async start(port: number);
  }

  // Plugins (middleware) class
  export declare class Plugins {
    async enable();
    async disable();
    async methodMap(): { [key: MethodMapKeys]: Function[] | Function };
    async plugins();
    async add(plugin: Function);
  }
}
