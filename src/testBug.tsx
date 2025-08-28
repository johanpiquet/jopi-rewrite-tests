import {jopiApp} from "jopi-rewrite";

jopiApp.startApp(jopiEasy => {
    jopiEasy.new_webSite("http://127.0.0.1")
        .add_sourceServer()
            .useOrigin("http://my-source-server-a.local")
            .on_beforeRequesting(url => {
                console.log("Sending a request to " + url)
            })
            .on_ifServerIsDown(serverReplace => {
                console.log("Server is ko: http://my-source-server-a.local");
                serverReplace.useOrigin("http://my-source-server-a.local").set_weight(1)
            })
        .END_add_sourceServer()
        .add_path_GET("/**", req => req.directProxyToServer())
    });