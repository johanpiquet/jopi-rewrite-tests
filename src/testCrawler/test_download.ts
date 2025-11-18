import {WebSiteCrawler} from "jopi-rewrite/crawler";

const outDir = "../../johan-piquet.fr";
const myLocalWordpressUrl = "https://my-jopi-web-site.jopi:8890";

async function launchCrawler() {
    console.log("Initialisation du crawler...");

    const crawler = new WebSiteCrawler(myLocalWordpressUrl, {
        outputDir: outDir,

        onUrlProcessed(infos) {
            console.log("📄", infos.localUrl);
        },

        transformUrl(url) {
            if (url === "index.html") return "/";
            if ((url === "index.html") || url.endsWith("/index.html")) return url.slice(0, -10);
            return url;
        },

        canIgnoreIfAlreadyCrawled() {
            return false;
        },

        canDownload(url) {
            return !url.startsWith("/wp-json/");
        },

        scanThisUrls: [
            "/wp-content/uploads/2022/04/lottie-home-lottie1.json",
            "/wp-content/uploads/2022/04/lottie-home-lottie2.json",
            "/wp-content/uploads/2022/04/lottie-home-lottie3.json",
            "/wp-content/uploads/2022/04/lottie-body-bg.webp",

            "/wp-content/themes/betheme/fonts/fontawesome/fa-brands-400.woff2",
            "/wp-content/themes/betheme/fonts/fontawesome/fa-brands-400.woff",
            "/wp-content/themes/betheme/fonts/fontawesome/fa-brands-400.ttf",

            // Permet de re-scanner, même si je ne rescanne pas les autres pages.
            "/blog",
            "/blog/",
            // "/docs/Jopi%20Rewrite/Intro"
        ],

        rewriteThisUrls: [
            "https://johan-piquet.fr"
        ]
    });

    console.log("🚀 Démarrage du crawling...");
    console.log("Source:", myLocalWordpressUrl);
    console.log("Destination:", outDir);

    await crawler.start()

    console.log("✅ Crawling terminé avec succès!");
}

console.log("🎯 Démarrage du script de construction du site web...");
await launchCrawler()
