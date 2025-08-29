import {jopiApp} from "jopi-rewrite";

jopiApp.startApp(jopiEasy => {
    jopiEasy.new_webSite("http://127.0.0.1")
        .add_sourceServer().useOrigin("http://127.0.0.1:3000").END_add_sourceServer()
        .add_path_GET("/", async req => req.directProxyToServer())
});