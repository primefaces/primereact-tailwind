import { DocComponent } from '@/components/doc/common/doccomponent';
import { BasicDoc } from '@/components/doc/calendar/basicdoc';

const CalendarDemo = () => {
    const docs = [
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDoc
        }
    ];

    return <DocComponent title="React Calendar Component" header="Calendar" description="Calendar, also known as DatePicker, is a form component to work with dates." componentDocs={docs} />;
};

export default CalendarDemo;
