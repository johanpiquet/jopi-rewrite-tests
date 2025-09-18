import React from "react";
import {useFormSubmit} from "jopi-rewrite-ui";

export default function() {
    // A function which will be called once the webservice returns.
    function onFormSubmitCallback(returnedData: any) {
        console.log("Returned data", returnedData);
    }

    // Here we get a 'submitForm' which will be used to submit our form.
    //
    // The second value is 'returnedData' which be automatically
    // updated with the returned value (through a state, doing that it's persistent).
    //
    const [submitForm, returnedData] = useFormSubmit(onFormSubmitCallback);

    return (
        <div>
            <form onSubmit={(e) => submitForm(e)}>
                <input name="fieldA" />
                <input name="fieldB" />
                <div>returnedData: {JSON.stringify(returnedData)}</div>
            </form>
        </div>
    );
};