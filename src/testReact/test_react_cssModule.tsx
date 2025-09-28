import React from "react";
import MyButton from "./myHydrateComp/CssModuleButton.tsx";
import {jopiApp} from "jopi-rewrite";

jopiApp.startApp(import.meta, jopiEasy => {
    jopiEasy.new_webSite("http://127.0.0.1")
        .add_path_GET("/", async req => req.reactResponse(<MyButton name="jopi" />))
});