import {jopiEasy} from "jopi-rewrite";
import TailWindCpA from "./myHydrateComp/TailWindCpA.tsx";

jopiEasy.new_fileServer("http://127.0.0.1").DONE_new_fileServer()
    .add_path("/").onGET(async req => req.reactResponse(<TailWindCpA />));
