import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { InputText } from 'primereact/inputtext';

export function IconsDoc(props) {
    const code = {
        basic: `
<span className="relative">
    <i className="pi pi-search absolute top-2/4 -mt-2 left-3 text-surface-400 dark:text-surface-600" />
    <InputText placeholder="Search" className="pl-10" />
</span>

<span className="relative">
    <i className="pi pi-spin pi-spinner absolute top-2/4 -mt-2 right-3 text-surface-400 dark:text-surface-600" />
    <InputText className="pr-10" />
</span>
        `,
        javascript: `
import React from 'react'; 
import { InputText } from "primereact/inputtext";

export default function IconsDemo() {
    return (
        <div className="card flex flex-wrap justify-center gap-3 ">
            <span className="relative">
                <i className="pi pi-search absolute top-2/4 -mt-2 left-3 text-surface-400 dark:text-surface-600" />
                <InputText placeholder="Search" className="pl-10" />
            </span>

            <span className="relative">
                <i className="pi pi-spin pi-spinner absolute top-2/4 -mt-2 right-3 text-surface-400 dark:text-surface-600" />
                <InputText className="pr-10" />
            </span>
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { InputText } from "primereact/inputtext";

export default function IconsDemo() {
    return (
        <div className="card flex flex-wrap justify-center gap-3 ">
            <span className="relative">
                <i className="pi pi-search absolute top-2/4 -mt-2 left-3 text-surface-400 dark:text-surface-600" />
                <InputText placeholder="Search" className="pl-10" />
            </span>

            <span className="relative">
                <i className="pi pi-spin pi-spinner absolute top-2/4 -mt-2 right-3 text-surface-400 dark:text-surface-600" />
                <InputText className="pr-10" />
            </span>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Icons can be placed inside an input element by wrapping both the input and the icon with an element that has either <i>.p-input-icon-left</i> or <br /> <i>p-input-icon-right</i> className.
                </p>
            </DocSectionText>
            <div className="card flex flex-wrap justify-center gap-3 ">
                <span className="relative">
                    <i className="pi pi-search absolute top-2/4 -mt-2 left-3 text-surface-400 dark:text-surface-600" />
                    <InputText placeholder="Search" className="pl-10" />
                </span>

                <span className="relative">
                    <i className="pi pi-spin pi-spinner absolute top-2/4 -mt-2 right-3 text-surface-400 dark:text-surface-600" />
                    <InputText className="pr-10" />
                </span>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
