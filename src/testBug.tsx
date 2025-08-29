import {buildSearchParamFilter, jopiApp} from "jopi-rewrite";

const searchFilter_HomePage = buildSearchParamFilter({}, {
    hello: {values: ["world", "jopi"]}
});

jopiApp.startApp(jopiEasy => {
    jopiEasy.new_webSite("http://127.0.0.1")
        .add_path("/")
        .onGET(async req => {
            // Will filter and order params.
            req.filterSearchParams();
            return req.htmlResponse("hello")
        })
        .add_searchParamFiler(searchFilter_HomePage)
});