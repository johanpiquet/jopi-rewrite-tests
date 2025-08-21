import React from "react";
import {mustHydrate, isServerSide} from "jopi-rewrite-ui";

import "./ComponentA.scss";

const Component = function() {
    return <div
        className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <img className="size-12 shrink-0" src="./bun.png" alt="ChitChat Logo"/>
        <div>
            <div className="text-xl font-medium text-black dark:text-white">ChitChat</div>
            <p className="text-red-500">You have a new message!</p>
        </div>
    </div>
};

export default mustHydrate(import.meta, Component);