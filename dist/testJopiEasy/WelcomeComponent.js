import { jsx as _jsx } from "react/jsx-runtime";
import { mustHydrate } from "jopi-rewrite-ui";
const Component = () => {
    return _jsx("div", { children: "Welcome from React 2 !" });
};
export default mustHydrate(import.meta, Component);
//# sourceMappingURL=WelcomeComponent.js.map