import { jsx as _jsx } from "react/jsx-runtime";
import { jopiApp } from "jopi-rewrite";
import TailWindCpA from "./myHydrateComp/TailWindCpA.js";
jopiApp.startApp(jopiEasy => {
    jopiEasy.new_fileServer("http://127.0.0.1").DONE_new_fileServer()
        .add_path("/").onGET(async (req) => req.reactResponse(_jsx(TailWindCpA, {})));
});
//# sourceMappingURL=test_react_tailwind.js.map