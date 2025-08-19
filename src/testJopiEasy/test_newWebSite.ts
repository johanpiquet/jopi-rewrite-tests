import {jopiEasy} from "jopi-rewrite";

const webSite = jopiEasy.new_webSite("http://localhost:8080")
    .add_fileServer("./www")
    .get_webSite_instance();

webSite.onGET("/version", req => {
    return req.jsonResponse({version: "1.0.0"});
});