import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { mustHydrate, isServerSide } from "jopi-rewrite-ui";
import "./HydrateComponentA.scss";
const Component = function () {
    return _jsxs("div", { className: "mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10", children: [_jsx("img", { className: "size-12 shrink-0", src: "./bun.png", alt: "ChitChat Logo" }), _jsxs("div", { children: [_jsx("div", { className: "text-xl font-medium text-black dark:text-white", children: "ChitChat" }), _jsx("p", { className: "text-red-500", children: "You have a new message!" })] })] });
};
export default mustHydrate(import.meta, Component);
//# sourceMappingURL=TailWindCpA.js.map