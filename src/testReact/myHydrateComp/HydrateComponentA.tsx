import React from "react";
import {mustHydrate, isServerSide} from "jopi-rewrite-ui";

import "./HydrateComponentA.scss";

const Component = function({name}: {name: string}) {
    function doClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        e.preventDefault();
        alert("click !");
    }

    let text = "Hello " + name;
    if (isServerSide()) text += " (server side)";
    else text += " (browser side)";

    return <div className="ComponentA" onClick={doClick}>
        <div className="welcome">{text}</div>
    </div>;
};

// Allow the magic comes from mustHydrate.
// It creates an island inside the server side rendered HTML
// where the HTML output of our React component is automatically
// replaced by the full functional React component.
//
export default mustHydrate(import.meta, Component);