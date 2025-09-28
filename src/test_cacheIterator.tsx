import {jopiApp} from "jopi-rewrite";

jopiApp.startApp(import.meta, jopiEasy => {
    jopiEasy.new_webSite("http://127.0.0.1")
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