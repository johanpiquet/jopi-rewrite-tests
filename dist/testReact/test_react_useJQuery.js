import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { createServer } from "../createServer.js";
import ComponentB from "./myHydrateComp/SsrButton.js";
await createServer(async req => {
    let res = await req.fetchServer();
    res = await req.hookIfHtml(res, text => {
        const $ = req.asJquery(text);
        const $found = $(".label-wrapper.mfn-menu-label-wrapper > .menu-label");
        let $first = $($found[0]);
        $first.reactReplaceContentWith(_jsx(ComponentB, { name: "jquery" }));
        return $.html();
    });
    return res;
});
//# sourceMappingURL=test_react_useJQuery.js.map