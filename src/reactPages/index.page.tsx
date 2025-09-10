import {isBrowserSide, useExecuteOnce, usePage} from "jopi-rewrite-ui";
import {Link} from "react-router";
import React from "react";

const text = isBrowserSide() ? "Browser side component" : "Server side component";

export default function() {
    const page = usePage();

    useExecuteOnce(() => {
        console.log("executing (useExecuteOnce)");
        page.addToHeader("link1", <link key="1" href="style2222.css" rel="stylesheet"/>)
    });

    return <div>
        <div>{text}</div>
        <div><Link to="/products">Products</Link></div>
        <div><Link to="/dont/exist">Page 404</Link></div>
    </div>
}