import http from 'http';

// Global Colossus namespace
declare module Colossus {
  // Declares types for brevity
  type Incoming = http.IncomingMessage;
  type Outgoing = http.ServerResponse;
  type MethodMapKeys = "uses" | "gets" | "heads" | "posts" | "puts" | "deletes" | "connects" | "options" | "traces" | "patches" | "catchall";
  type ColossusFunction = (req: Incoming, res: Outgoing) => void;

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
    get req(): ColossusFunction;

    catchall(f: ColossusFunction);
    use(m: string, f: ColossusFunction);
    get(m: string, f: ColossusFunction);
    head(m: string, f: ColossusFunction);
    post(m: string, f: ColossusFunction);
    put(m: string, f: ColossusFunction);
    delete(m: string, f: ColossusFunction);
    connect(m: string, f: ColossusFunction);
    options(m: string, f: ColossusFunction);
    trace(m: string, f: ColossusFunction);

    start(port: number);
  }

  // Plugins (middleware) class
  export class Plugins {
    enable();
    disable();
    methodMap(): { [key in MethodMapKeys]: ColossusFunction[] | ColossusFunction };
    plugins();
    add(plugin: ColossusFunction);
  }
}
