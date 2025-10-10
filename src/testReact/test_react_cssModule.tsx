import React from "react";
import MyButton from "./myHydrateComp/CssModuleButton.tsx";
import {jopiApp} from "jopi-rewrite";

jopiApp.startApp(import.meta, jopiEasy => {
    jopiEasy.new_webSite()
        .add_path_GET(["/", "inner/path"], async req => {
            return req.reactResponse(<MyButton name="jopi" />);
        })
});