import {jopiApp} from "jopi-rewrite";

import ComponentA from "./myHydrateComp/HydrateComponentA.tsx";
import React from "react";

jopiApp.startApp(jopiEasy => {
    jopiEasy.new_webSite("http://127.0.0.1")
        .add_path_GET("/", async req => req.reactResponse(<ComponentA name="hello jopi" />))
});