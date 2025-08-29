import React from "react";

import ComponentB from "./myHydrateComp/SsrButton.tsx";
import {jopiApp} from "jopi-rewrite";

jopiApp.startApp(jopiEasy => {
    jopiEasy.new_webSite("http://127.0.0.1")
        .add_path_GET("/", async req => {
            let res = await req.fetchServer();

            res = await req.hookIfHtml(res, text => {
                const $ = req.asJquery(text);

                const $found = $(".label-wrapper.mfn-menu-label-wrapper > .menu-label");
                let $first = $($found[0]);

                $first.reactReplaceContentWith(<ComponentB name="jquery" />);

                return $.html();
            });

            return res;
        })
});