import {jopiApp} from "jopi-rewrite";

jopiApp.startApp(jopiEasy => {
    jopiEasy.new_webSite("http://127.0.0.1")
        //.enable_reactRouter(import.meta)

        .enable_automaticCache()
        .use_memoryCache()
        .END_use_AutomaticCache()

        // Can mix router and manually defined path
        // because ReactRouter will send a 404, since
        // only the Page Router declared correctly.
        //
        .add_path("/time")

        .use({
            onGET: async req => {
                return req.reactResponse(<div>Date: {new Date().toDateString()}</div>)
            },

            // enableAutoCache: false
        })
});