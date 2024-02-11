import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { InputText } from 'primereact/inputtext';

export function SizesDoc(props) {
    const code = {
        basic: `
<InputText type="text" size="small" placeholder="Small" />
<InputText type="text" placeholder="Normal" />
<InputText type="text" size="large" placeholder="Large" />
        `,
        javascript: `
import React from 'react'; 
import { InputText } from "primereact/inputtext";

export default function SizesDemo() {
    return (
        <div className="card flex flex-column align-items-center gap-3 ">
            <InputText type="text" size="small" placeholder="Small" />
            <InputText type="text" placeholder="Normal" />
            <InputText type="text" size="large" placeholder="Large" />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { InputText } from "primereact/inputtext";

export default function SizesDemo() {
    return (
        <div className="card flex flex-column align-items-center gap-3 ">
            <InputText type="text" size="small" placeholder="Small" />
            <InputText type="text" placeholder="Normal" />
            <InputText type="text" size="large" placeholder="Large" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    InputText provides <i>small</i> and <i>large</i> sizes as alternatives to the standard.
                </p>
            </DocSectionText>
            <div className="card flex flex-col items-center gap-3">
                <InputText type="text" size="small" placeholder="Small" />
                <InputText type="text" placeholder="Normal" />
                <InputText type="text" size="large" placeholder="Large" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
