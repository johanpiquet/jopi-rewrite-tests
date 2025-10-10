import {jopiApp} from "jopi-rewrite";

jopiApp.startApp(import.meta, jopiEasy => {
    jopiEasy.new_webSite()
        .add_sourceServer().useOrigin("http://127.0.0.1:3333").END_add_sourceServer()
        .add_path_GET("/", async req => req.directProxyToServer())
});