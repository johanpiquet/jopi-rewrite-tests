import {createServer} from "../createServer.ts";
import {getInMemoryCache} from "jopi-rewrite";

const cache = getInMemoryCache();

await createServer(async req => {
    const fromCache = await req.getFromCache();
    if (fromCache) return fromCache;

    console.log("InMemoryCache - Not in cache:", req.url);

    let res = await req.fetchServer();
    return req.addToCache_Compressed(res);
}, cache);