import {type LoginPassword, getRouteContext} from "jopi-rewrite";

let ctx = getRouteContext();

ctx.onGET(async (req, next) => {
    console.log("login.server.tsx is catching")
    return next(req);
});

ctx.onPOST(async req => {
    const data = await req.getReqData(true);
    console.log("Post data:", data);

    let authResult = await req.tryAuthWithJWT(data as LoginPassword);

    return req.jsonResponse({
        isOk: authResult.isOk,
        authResult: authResult
    });
});