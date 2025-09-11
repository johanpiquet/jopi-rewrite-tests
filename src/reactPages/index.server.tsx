import {getRouteContext} from "jopi-rewrite";

let ctx = getRouteContext();

ctx.onGET(async (req, next) => {
    console.log("index.server.tsx is catching")
    return next(req);
});