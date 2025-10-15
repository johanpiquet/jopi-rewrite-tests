import React from "react";
import {mustHydrate, isServerSide} from "jopi-rewrite/ui";

import "./HydrateComponentA.scss";

const Component = function({name}: {name: string}) {
    function doClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        e.preventDefault();
        alert("click !");
    }

    let text = name;
    if (isServerSide) text += " (server side)";
    else text += " (browser side)";

    return <div className="ComponentA" onClick={doClick}>{text}</div>;
};

// Note the 'mustHydrate' call here!
export default mustHydrate(import.meta, Component);