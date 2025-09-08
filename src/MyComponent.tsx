import React from "react";
import styles from "./style.module.css"
import {mustHydrate} from "jopi-rewrite-ui";

const Component = function() {
    return <div className={styles.cpna}>my component</div>
};

export default mustHydrate(import.meta, Component, styles);