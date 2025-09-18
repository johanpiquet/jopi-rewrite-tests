import {getRouteContext} from "jopi-rewrite";

let ctx = getRouteContext();

ctx.onPOST(async req => {
    // Get the data send to the server.
    const data = await req.getReqData();
    // Return it as-is, in json format.
    return req.jsonResponse(data);
});

ctx.onGET(async (req, next) => {
    let res = await req.getFromCache();

    if (!res) {
        // Here 'next' allows rendering the content of index.page.tsx.
        res = await next(req);
        await req.addToCache(res);
    }

    return res;
});