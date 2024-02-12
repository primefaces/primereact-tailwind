import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/inputswitch/accessibilitydoc';
import { BasicDoc } from '@/components/doc/inputswitch/basicdoc';
import { DisabledDoc } from '@/components/doc/inputswitch/disableddoc';
import { ImportDoc } from '@/components/doc/inputswitch/importdoc';
import { PreselectionDoc } from '@/components/doc/inputswitch/preselectiondoc';

const InputSwitchDemo = () => {
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
            id: 'preselection',
            label: 'Preselection',
            component: PreselectionDoc
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

    return <DocComponent title="React InputSwitch Component" header="InputSwitch" description="InputSwitch is used to select a boolean value." componentDocs={docs} />;
};

export default InputSwitchDemo;
