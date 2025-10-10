import {jopiApp} from "jopi-rewrite";
import TailWindCpA from "./myHydrateComp/TailWindCpA.tsx";

jopiApp.startApp(import.meta, jopiEasy => {
    jopiEasy.new_fileServer().DONE_new_fileServer()
        .add_path("/").onGET(async req => req.reactResponse(<TailWindCpA/>));
});
