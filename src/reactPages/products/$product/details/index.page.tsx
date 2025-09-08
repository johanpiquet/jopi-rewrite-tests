import {isServerSide} from "jopi-rewrite-ui";
import { useParams } from "react-router";

export default function() {
    let params = useParams();

    if (isServerSide()) {
        console.log("Details: server side render", params);
    }

    return <div>
        Details page for {params.product}
    </div>;
}