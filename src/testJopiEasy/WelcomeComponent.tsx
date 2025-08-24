import {mustHydrate} from "jopi-rewrite-ui";

const Component = () => {
    return <div>Welcome from React 1 !</div>;
};

export default mustHydrate(import.meta, Component);