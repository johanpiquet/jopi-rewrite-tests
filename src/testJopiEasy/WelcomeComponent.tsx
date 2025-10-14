import {mustHydrate} from "jopi-rewrite/ui";

const Component = () => {
    return <div>Welcome from React !</div>;
};

export default mustHydrate(import.meta, Component);