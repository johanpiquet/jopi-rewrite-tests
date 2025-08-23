import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { mustHydrate, isServerSide } from "jopi-rewrite-ui";
import "./HydrateComponentA.scss";
const Component = function ({ name }) {
    function doClick(e) {
        e.preventDefault();
        alert("click !");
    }
    let text = "Hello " + name;
    if (isServerSide())
        text += " (server side)";
    else
        text += " (browser side)";
    return _jsx("div", { className: "ComponentA", onClick: doClick, children: _jsx("div", { className: "welcome", children: text }) });
};
// Allow the magic comes from mustHydrate.
// It creates an island inside the server side rendered HTML
// where the HTML output of our React component is automatically
// replaced by the full functional React component.
//
export default mustHydrate(import.meta, Component);
//# sourceMappingURL=HydrateComponentA.js.map