import { parseISO, format } from "date-fns";
import { toZonedTime, format as formatTZ } from "date-fns-tz";

export const formatar_data = (datetime: string, format?: string | null) => {
  const dateFormat = format == null ? "yyyy-MM-dd HH:mm:ssXXX" : format;

  const localTime = toZonedTime(
    datetime,
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );

  const formatted = formatTZ(localTime, dateFormat, {
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  });

  return formatted;
};
