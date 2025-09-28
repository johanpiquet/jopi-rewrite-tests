import {isBrowserSide, useExecuteOnce, useUserInfos, usePage} from "jopi-rewrite-ui";
import {Link} from "react-router";
import React from "react";

const text = isBrowserSide() ? "Browser side component" : "Server side component";

export default function() {
    const page = usePage();
    const userInfos = useUserInfos();

    useExecuteOnce(() => {
        console.log("executing (useExecuteOnce)");
        page.setPageTitle("My page title");
        page.addStyleLinkToHeader("global", "my-custom-style.css");
    }, import.meta.filename);

    return <div>
        <div>{text}</div>
        <div><Link to="/products">Products</Link></div>
        <div><Link to="/dont/exist">Page 404</Link></div>
        <div><Link to="/login">Login</Link></div>
    </div>
}