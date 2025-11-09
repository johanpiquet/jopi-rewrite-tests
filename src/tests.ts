import {jopiApp} from "jopi-rewrite";

jopiApp.startApp(import.meta, jopiEasy => {
    jopiEasy.create_creatWebSiteServer(`http://localhost:3000`);
});