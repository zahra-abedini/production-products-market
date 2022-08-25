import React from "react";
import FormHeader from "./FormHeader";
import FormSelf from "./FormSelf";

function Form() {
    return (
        <div className="ui basic segment center aligned formConatinar bg-lightgray ">
           <FormHeader />
            <div className="formSelf">
                <FormSelf />
            </div>
        </div>
    );
}

export default Form;
