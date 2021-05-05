# Colossus

A speedy, lightweight Express JS alternative.<br>
**Lead Developers**:
- [Monotrix](https://github.com/Monotrix)
- [iCraze](https://github.com/iCrazeiOS)

**Credits**:
- [Constanze](https://github.com/Julz4455) - Fixing up Server.js
- [Korfi](https://twitter.com/Korfi8267) - Icon

---

**Why use Colossus over Express?**<br>
Honestly, Colossus is, in its current state, a project that I only see myself using. As of right now (5/5/21), Colossus is still in an early (although functioning) stage. Despite all this, Colossus is marginally faster than Express. When running tests comparing Express' and Colossus' times for certain vital tasks, Colossus almost always wins. Below are the statistics for these tests:<br>
- Startup Time
    - Colossus
        - 0 to 4 ms
    - Express
        - 3 to 8 ms
- Response Time
    - Colossus
        - 0 to 14 ms
    - Express
        - 5 to 20 ms

In addition to this, Colossus is also dep-less and (for those who don't like any dependencies at all) can be used completely in one file. Colossus also has native "plugin" (a substitute for Express' middleware) support, but this feature is in an early beta.

**Install**<br>
[How to install Colossus](/install)

**Individual Feature Docs**<br>
- [How to start server](/start)
- [`USE` endpoint creation](/use)
- [`GET` endpoint creation](/get)
- [`HEAD` endpoint creation](/head)
- [`POST` endpoint creation](/post)
- [`PUT` endpoint creation](/put)
- [`DELETE` endpoint creation](/delete)
- [`CONNECT` endpoint creation](/connect)
- [`OPTIONS` endpoint creation](/options)
- [`TRACE` endpoint creation](/trace)
- [`PATCH` endpoint creation](/patch)