import {isBrowserSide} from "jopi-rewrite-ui";
import {Link} from "react-router";
import React from "react";

const text = isBrowserSide() ? "Browser side component" : "Server side component";

export default function() {
    return <div>
        <div>{text}</div>
        <div><Link to="/products">Products</Link></div>
        <div><Link to="/dont/exist">Page 404</Link></div>
    </div>
}