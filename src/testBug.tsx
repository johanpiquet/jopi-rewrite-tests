import {jopiApp} from "jopi-rewrite";

jopiApp.startApp(jopiEasy => {
    jopiEasy.new_webSite("http://127.0.0.1")
    .add_path_GET("/", req => {
        // If the user does not have this role, then throw
        // a NotAuthorizedException error, which will
        // return a response with code 401.
        //
        req.assertUserHasRoles("reader");

        if (req.userHasRoles("admin", "writer")) {
            return req.htmlResponse("You are an admin with writer role!");
        }

        if (req.userHasRoles("writer")) {
            return req.htmlResponse("You have writer access!");
        }

        return req.htmlResponse("Your roles:" + JSON.stringify(req.getUserRoles()));
    });
});