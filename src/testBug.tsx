import {jopiApp} from "jopi-rewrite";

jopiApp.startApp(jopiEasy => {
    jopiEasy.new_webSite("http://127.0.0.1")
        .add_middleware()
            .use_cors()
        .END_add_middleware()
        .add_path("/search")
        .onGET(async req => req.htmlResponse(req.urlInfos.href))
});