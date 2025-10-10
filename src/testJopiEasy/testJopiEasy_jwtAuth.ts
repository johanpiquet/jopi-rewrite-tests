import {jopiApp} from "jopi-rewrite";

jopiApp.startApp(import.meta, jopiEasy => {
    jopiEasy.new_webSite()
        .add_jwtTokenAuth()

        .step_setPrivateKey("my-secret-key")

        .step_setUserStore()
            .use_simpleLoginPassword()
                .addOne("usera", "pwd-usera", {id: "userA", roles: ["admin", "reader", "writer"]})
                .addOne("userb", "pwd-userb", {id: "userb", roles: ["admin", "reader"]})
                .addOne("userc", "pwd-userc", {id: "userc"})
                .DONE_use_simpleLoginPassword()
        .stepConfigure()
            // Cookie will be valid for 4 hours.
            // (default is 7 days)
            .set_cookieDuration(4)
            .DONE_stepConfigure()

        .DONE_add_jwtTokenAuth()

        .add_path_GET("/", async req => {
            // Will get our user info or leave and
            // returns a 401 (unauthorized) if the user
            // is not logged in (you can use getUserInfos
            // to avoid this behavior).
            //
            let infos = req.requireUserInfos();

            // Returns the information.
            return req.jsonResponse(infos);
        })

        .add_path_GET("/auth", async req => {
            // Will read data from the url.
            const userLoginPassword = await req.getReqData();

            // Auth the user. Once done, the auth token is stored in a cookie.
            const authRes = await req.tryAuthWithJWT(userLoginPassword);

            if (!authRes.isOk) {
                return req.textResponse(authRes.errorMessage||"", 401);
            }

            // When creating an auth API, you must return a JSON with the token.
            // If it's an auth page, then you have to know that "req.tryAuthWithJWT"
            // automatically adds the JWT token to the "Authentification" cookie.
            //
            return req.jsonResponse(authRes.authToken);
        });
});