import {buildSearchParamFilter, jopiApp} from "jopi-rewrite";

// Will filter our search page params.
const filter_SearchPage = buildSearchParamFilter({}, {
    // For param "sort", only "asc" is accepted.
    sort: {values: ["asc"]},

    // For param "query", all values are accepted.
    // Warning: when this is the case, you must NOT cache the page!
    query: {allowAllValues: true}
});

jopiApp.startApp(import.meta, jopiEasy => {
    jopiEasy.new_webSite("http://127.0.0.1")
        .add_path("/search")
        .onGET(async req => {
            // Will filter and order params.
            req.filterSearchParams();
            return req.htmlResponse(req.urlInfos.href)
        })
        .add_searchParamFiler(filter_SearchPage)
});