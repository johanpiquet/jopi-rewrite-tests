import {getServer, jopiApp} from "jopi-rewrite";

NodeSpace.app.onAppExiting(async () => {
    console.log("App exiting...");
    await NodeSpace.timer.tick(2000);
    console.log("App Exited!");
});

jopiApp.startApp(jopiEasy => {
    jopiEasy.new_webSite("http://127.0.0.1")
        .add_path_GET("/", async req => {
            await getServer().stopServer();
            return req.htmlResponse("Server stopping");
    })
});