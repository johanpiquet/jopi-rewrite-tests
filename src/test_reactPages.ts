import {jopiApp} from "jopi-rewrite";

jopiApp.startApp(import.meta, jopiEasy => {
    jopiEasy.new_webSite()
        .add_jwtTokenAuth()
            .step_setPrivateKey("my-private-key")
            .step_setUserStore()
                .use_simpleLoginPassword()
                    .addOne("johan@mymail.com", "mypassword", {
                        id: "johan",
                        fullName: "Johan P",
                        email: "johan@mymail.com",
                        roles: ["admin", "writer"]
                    })
                .DONE_use_simpleLoginPassword()
            .DONE_setUserStore()
        .DONE_add_jwtTokenAuth()
});