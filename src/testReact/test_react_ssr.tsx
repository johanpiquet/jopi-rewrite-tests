import React from "react";

import MyButton from "./myHydrateComp/SsrButton.tsx";
import {jopiApp} from "jopi-rewrite";

jopiApp.startApp(import.meta, jopiEasy => {
    jopiEasy.new_webSite()
        .add_path_GET("/", async req => req.reactResponse(<MyButton name="jopi" />))
});