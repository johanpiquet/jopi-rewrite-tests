import {mustHydrate} from "jopi-rewrite-ui";

const Component = () => {
    return <div>Welcome from React 2 !</div>;
};

export default mustHydrate(import.meta, Component);