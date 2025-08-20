import {jopiEasy} from "jopi-rewrite";

jopiEasy.new_webSite("https://127.0.0.1")

    .add_jwtTokenAuth()
        .step_setPrivateKey("my key")
        .step_setUserStore()
            .use_simpleLoginPassword()
                .DONE_use_simpleLoginPassword()
        .stepOptional_setTokenStore()
            .use_authentificationHeader()
        .DONE_add_jwtTokenAuth();