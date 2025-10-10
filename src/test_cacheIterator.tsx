import {jopiApp} from "jopi-rewrite";

jopiApp.startApp(import.meta, jopiEasy => {
    jopiEasy.new_webSite()
        .enable_automaticCache()
            .use_memoryCache()
            .END_use_AutomaticCache()

        .add_path_USE("/", {
            onGET: async req => req.htmlResponse(new Date().toLocaleTimeString())
        })

        .add_path("/cache")
            .onGET(async req => {
                let itr = req.getCacheEntryIterator();

                for (const value of itr) {
                    console.log(value.url);
                }

                return req.htmlResponse(new Date().toLocaleTimeString())
            })
            .disable_automaticCache()
});