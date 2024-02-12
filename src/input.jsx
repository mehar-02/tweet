
import React, { ChangeEvent, JSXElementConstructor, useState } from "react";
import { InputField, FieldLabel, FieldGroup } from '@attrybtech/attryb-ui';

function MyInputField({onType}) {
    const [value, setValue] = useState("")
    const handleInputChange = (event) => {
       // console.log("event: ", event);
        if(event && event.target){
        setValue(event.target.value);
        // onChange(value);
        onType(event.target.value);
        }
        else{
            console.log("event undefinded");
        }
    }
    const maxChars = 160
    return (
        <div className="Doc DocInputField">
            {/* <h1>TextField</h1> */}
            <div className="DocEntry">
                {/* <h3>Default</h3> */}
                <div className="Example">
                    <FieldGroup name="sample-text-field">
                        <FieldLabel
                            name="nnnn"
                            forFieldValue={value}
                            maxCharsLimit={maxChars}>
                            Your Message
                        </FieldLabel>
                        <InputField
                            name="input-one"
                            state={"default"}
                            placeholder={"Enter your thoughts..."}
                            preFilledValue={value}
                            maxCharsLimit={maxChars}
                            onChange={(event) => handleInputChange(event)}
                        />
                        {/* <InputField
                            name="input-one"
                            state={"disabled"}
                            placeholder={"Lorem is ipsum..."}
                            preFilledValue={value}
                        /> */}
                    </FieldGroup>
                </div>
            </div>
        </div>
    );
}

export default MyInputField;

// import React, { ChangeEvent, JSXElementConstructor, useState } from "react"
// import { Input } from '@attrybtech/attryb-ui';

// function InputField() {
//     const [value, setValue] = useState("")
//     const maxChars = 20
//     return (
//         <div className="Doc DocInput">
//             {/* <h1>InputField</h1> */}
//             <div className="DocEntry">
//                 {/* <h3>Default</h3> */}
//                 <div className="Example">
//                     <Input
//                         state={"default"}
//                         placeholder={"Thoughts?..."}
//                         preFilledValue={value}
//                         maxCharsLimit={maxChars}
//                         onChange={(event) => {
//                             setValue(event?.target?.value)
//                         }}
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default InputField;
