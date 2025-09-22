import {getRouteContext} from "jopi-rewrite";

let ctx = getRouteContext();

ctx.onPOST(async req => {
    // Get the data send to the server.
    const data = await req.getReqData();
    // Return it as-is, in json format.
    return req.jsonResponse(data);
});