import http from 'http';

// Global Colossus namespace
declare module Colossus {
  // Declares types for brevity
  type Incoming = http.IncomingMessage;
  type Outgoing = http.ServerResponse;
  type MethodMapKeys = "uses" | "gets" | "heads" | "posts" | "puts" | "deletes" | "connects" | "options" | "traces" | "patches" | "catchall";

  /* Private classes ahead... but needed for type spec */
 class Params {
    request: Incoming;
    response: Outgoing;

    setRequest(r: Incoming);
    setResponse(r: Outgoing);
  }

 class Handlers {
    plugins();
    requestH();
  }

  // Basic server class
  export class Server {
    get req(): Function;

    catchall(f: Function);
    use(m: string, f: Function);
    get(m: string, f: Function);
    head(m: string, f: Function);
    post(m: string, f: Function);
    put(m: string, f: Function);
    delete(m: string, f: Function);
    connect(m: string, f: Function);
    options(m: string, f: Function);
    trace(m: string, f: Function);

    start(port: number);
  }

  // Plugins (middleware) class
  export class Plugins {
    enable();
    disable();
    methodMap(): { [key in MethodMapKeys]: Function[] | Function };
    plugins();
    add(plugin: Function);
  }
}
