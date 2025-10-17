import {RouteServerContext} from "jopi-rewrite";

export default function(ctx: RouteServerContext) {
    ctx.onPOST(async req => {
        // Get the data to send to the server.
        const data = await req.getBodyData();
        // Return it as-is, in JSON format.
        return req.jsonResponse(data);
    });
}