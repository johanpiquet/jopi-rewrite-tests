import {isServerSide} from "jopi-rewrite-ui";

export default function() {
    if (isServerSide()) {
        console.log("Products: server side render");
    }

    return <div>
        Products page
    </div>;
}