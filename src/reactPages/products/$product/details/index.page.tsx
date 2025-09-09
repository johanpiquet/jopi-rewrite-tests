import {isServerSide, usePageParams} from "jopi-rewrite-ui";

export default function() {
    let params = usePageParams();

    if (isServerSide()) {
        console.log("Details: server side render", params);
    }

    return <div>
        Details page for {params.product}
    </div>;
}