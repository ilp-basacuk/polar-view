import { parseISO } from 'date-fns';
import { format, utcToZonedTime } from 'date-fns-tz';

export const parseToUTC = (time: string): string => {
  const parsedTime = parseISO(time);
  const formatInTimeZone = (date, fmt, tz) =>
    format(utcToZonedTime(date, tz), fmt, { timeZone: tz });
  return `${formatInTimeZone(parsedTime, 'yyyy-MM-dd kk:mm:ss', 'UTC')} UTC`;
};

export const stringifyDate = (date) => date && format(date, 'yyyy-MM-dd');
