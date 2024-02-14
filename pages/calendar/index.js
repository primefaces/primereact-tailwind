import { DocComponent } from '@/components/doc/common/doccomponent';
import { BasicDoc } from '@/components/doc/calendar/basicdoc';
import { FormatDoc } from '@/components/doc/calendar/formatdoc';
import { LocaleDoc } from '@/components/doc/calendar/localedoc';
import { IconDoc } from '@/components/doc/calendar/icondoc';

const CalendarDemo = () => {
    const docs = [
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDoc
        },
        {
            id: 'format',
            label: 'Format',
            component: FormatDoc
        },
        {
            id: 'locale',
            label: 'Locale',
            component: LocaleDoc
        },
        {
            id: 'icon',
            label: 'Icon',
            component: IconDoc
        }
    ];

    return <DocComponent title="React Calendar Component" header="Calendar" description="Calendar, also known as DatePicker, is a form component to work with dates." componentDocs={docs} />;
};

export default CalendarDemo;
