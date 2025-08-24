import {mustHydrate} from "jopi-rewrite-ui";

const Component = () => {
    return <div>Welcome from React 3 !</div>;
};

export default mustHydrate(import.meta, Component);