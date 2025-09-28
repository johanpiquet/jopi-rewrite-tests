import {jopiApp} from "jopi-rewrite";

jopiApp.startApp(import.meta, jopiEasy => {
    jopiEasy.new_fileServer("https://127.0.0.1")
        .set_rootDir("www")
        .DONE_new_fileServer()

        // We can add a custom handler, which will have priority.
        .add_path_GET("/version", async req => req.jsonResponse({version: "1.0.0"}));
});