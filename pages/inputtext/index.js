import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/inputtext/accessibilitydoc';
import { BasicDoc } from '@/components/doc/inputtext/basicdoc';
import { DisabledDoc } from '@/components/doc/inputtext/disableddoc';
import { HelpTextDoc } from '@/components/doc/inputtext/helptextdoc';
import { IconsDoc } from '@/components/doc/inputtext/iconsdoc';
import { ImportDoc } from '@/components/doc/inputtext/importdoc';
import { SizesDoc } from '@/components/doc/inputtext/sizesdoc';

const InputTextDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDoc
        },
        {
            id: 'icons',
            label: 'Icons',
            component: IconsDoc
        },
        {
            id: 'sizes',
            label: 'Sizes',
            component: SizesDoc
        },
        {
            id: 'helptext',
            label: 'Help Text',
            component: HelpTextDoc
        },
        {
            id: 'disabled',
            label: 'Disabled',
            component: DisabledDoc
        },
        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        }
    ];

    return <DocComponent title="React Input Component" header="InputText" description="InputText is an extension to standard input element with theming and keyfiltering." componentDocs={docs} />;
};

export default InputTextDemo;
