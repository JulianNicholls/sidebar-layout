import { useState } from 'react';

import { DatePicker } from '@nextui-org/react';
import { DateValue, parseDate, getLocalTimeZone } from '@internationalized/date';
import { I18nProvider } from '@react-aria/i18n';

export default function App() {
  const [value, setValue] = useState<DateValue>(parseDate('2024-04-04'));

  return (
    <div className="flex flex-row gap-2">
      <div className="w-full flex flex-col gap-y-2">
        <I18nProvider locale="en-UK">
          <DatePicker
            className="max-w-[284px]"
            label="Date (controlled)"
            value={value}
            onChange={setValue}
            showMonthAndYearPickers
          />
        </I18nProvider>

        <p className="text-default-500 text-sm">
          Selected date:{' '}
          {value ? value.toDate(getLocalTimeZone()).toLocaleDateString('en-uk') : '--'}
          {/* {value ? formatter.format(value.toDate(getLocalTimeZone())) : '--'} */}
        </p>
      </div>

      <DatePicker
        className="max-w-[284px]"
        defaultValue={parseDate('2024-04-04')}
        label="Date (uncontrolled)"
      />
    </div>
  );
}
