import { secondsInDay, secondsInHour, secondsInMinute } from "./constants";

interface BrokenSeconds {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function breakSeconds(seconds: number): BrokenSeconds {
  const days = Math.floor(seconds / secondsInDay);
  seconds %= secondsInDay;
  const hours = Math.floor(seconds / secondsInHour);
  seconds %= secondsInHour;
  const minutes = Math.floor(seconds / secondsInMinute);
  seconds %= secondsInMinute;
  return { days, hours, minutes, seconds };
}

function pad(input: number, offset = 2): string {
  return String(input).padStart(offset, "0");
}

/**
 * Provided a number of seconds, the function breaks that number into duration,
 * including days, hours, minutes and seconds. The function formats duration into:
 * ```plain
 * DAYS:HH:MM:SS
 * ```
 * If `seconds` is negative, the function will return:
 * ```
 * "0:00:00:00"
 * ```
 * Refer to unit tests for examples.
 */
export function toRemainingTimeFormat(seconds: number): string {
  if (seconds < 0) { seconds = 0; }
  const brokenSeconds = breakSeconds(seconds);
  const hoursStr = pad(brokenSeconds.hours);
  const minutesStr = pad(brokenSeconds.minutes);
  const secondsStr = pad(brokenSeconds.seconds);
  return `${brokenSeconds.days}:${hoursStr}:${minutesStr}:${secondsStr}`;
}
