import {jopiApp} from "jopi-rewrite";

import ComponentA from "./myHydrateComp/HydrateComponentA.tsx";
import React from "react";

jopiApp.startApp(import.meta, jopiEasy => {
    jopiEasy.new_webSite()
        .add_path_GET("/", async req => req.reactResponse(<ComponentA name="hello jopi" />))
});