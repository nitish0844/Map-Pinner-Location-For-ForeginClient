import dayjs from 'dayjs';
var relativeTime = require('dayjs/plugin/relativeTime');
var localizedFormat = require('dayjs/plugin/localizedFormat');

import 'intl';
import 'intl/locale-data/jsonp/en';

dayjs.extend(localizedFormat);
dayjs.extend(relativeTime);

export const dateTimeHandler = () => {
  const d = new Date();

  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const timeDateData = {
    createdAt: d.getTime(),
    time: dayjs(d).format('LTS'),
    date: dayjs(d).format('L'),
    month: dayjs(d).format('MMMM'),
    year: dayjs(d).format('YYYY'),
    day: weekday[d.getDay()],
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || '',
  };

  return timeDateData;
};

export const timezoneHandler = () => {
  const timezoneData = Intl.DateTimeFormat().resolvedOptions().timeZone || '';

  return timezoneData;
};

export const purchaseDateTimeHandler = () => {
  const d = new Date();

  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const timeDateData = {
    createdAt: d.getTime(),
    time: dayjs(d).format('LTS'),
    date: dayjs(d).format('L'),
    month: dayjs(d).format('MMMM'),
    year: dayjs(d).format('YYYY'),
    day: weekday[d.getDay()],
  };

  return timeDateData;
};

export const signupDateTimeHandler = () => {
  const d = new Date();

  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const timeDateData = {
    createdAt: d.getTime(),
    time: dayjs(d).format('LTS'),
    date: dayjs(d).format('L'),
    month: dayjs(d).format('MMMM'),
    year: dayjs(d).format('YYYY'),
    day: weekday[d.getDay()],
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || '',
  };

  return timeDateData;
};

export const incomeExpenseTimeHandler = selectedDate => {
  const d = new Date(selectedDate);

  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const timeDateData = {
    createdAt: new Date().getTime(),
    madeAt: d.getTime(),
    time: dayjs(d).format('LTS'),
    date: dayjs(d).format('L'),
    month: dayjs(d).format('MMMM'),
    year: dayjs(d).format('YYYY'),
    day: weekday[d.getDay()],
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || '',
  };

  return timeDateData;
};
