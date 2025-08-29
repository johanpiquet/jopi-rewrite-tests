import React from "react";
import {mustHydrate, isServerSide} from "jopi-rewrite-ui";

import styles from "./mybutton.module.scss";

function Component({name}: {name: string}) {
    function doClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        e.preventDefault();
        alert("click !");
    }

    let text = "Hello " + name;
    if (isServerSide()) text += " (server side)";
    else text += " (browser side)";

    return <div className={styles.myLocalStyle} onClick={doClick}>
        <div className="welcome">{text}</div>
    </div>;
}

// Here we add "styles" which allow automatically include the CSS module in the page header as inline CSS.
export default mustHydrate(import.meta, Component, styles);