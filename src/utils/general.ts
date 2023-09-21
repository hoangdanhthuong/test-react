import { format } from "date-fns";

export function formatDateToMMYY(date: Date): string {
  return format(date, "MM.yy");
}

export function formatDate(date: Date): string {
  // Format the date as YYYY.MM.DD
  return format(date, "yyyy.MM.dd");
}

export function formatDateTime(date: Date): string {
  return format(date, "yyyy.MM.dd HH:mm");
}
