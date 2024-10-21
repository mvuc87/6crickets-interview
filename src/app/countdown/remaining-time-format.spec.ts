import { secondsInDay, secondsInHour, secondsInMinute } from './constants';
import { toRemainingTimeFormat } from './remaining-time-format';

/**
 * A test case for the "format" function
 */
interface FormatTestCase {
  seconds: number;
  expected: string;
}

/**
 * Test cases for the "format" function.
 */
const formatTestCases: FormatTestCase[] = [
  {
    seconds: 0,
    expected: "0:00:00:00"
  },
  {
    seconds: 1,
    expected: "0:00:00:01"
  },
  {
    seconds: 10,
    expected: "0:00:00:10"
  },
  {
    seconds: 59,
    expected: "0:00:00:59"
  },
  {
    seconds: secondsInMinute * 1,
    expected: "0:00:01:00"
  },
  {
    seconds: secondsInMinute * 10,
    expected: "0:00:10:00"
  },
  {
    seconds: secondsInMinute * 59,
    expected: "0:00:59:00"
  },
  {
    seconds: secondsInHour * 1,
    expected: "0:01:00:00"
  },
  {
    seconds: secondsInHour * 10,
    expected: "0:10:00:00"
  },
  {
    seconds: secondsInHour * 24,
    expected: "1:00:00:00"
  },
  {
    seconds: secondsInHour * 24 + 1,
    expected: "1:00:00:01"
  },
  {
    seconds: secondsInHour * 24 + 1,
    expected: "1:00:00:01"
  },
  {
    seconds: secondsInDay + secondsInHour + secondsInMinute + 1,
    expected: "1:01:01:01"
  },
  {
    seconds: 100 * secondsInDay + secondsInHour + secondsInMinute + 1,
    expected: "100:01:01:01"
  },
  {
    seconds: -1,
    expected: "0:00:00:00"
  },
];

/**
 * Execute tests cases for the "format" function.
 */
describe("format function", () => {
  formatTestCases.forEach(({ seconds, expected }, index) => {
    it(`test case ${index}`, () => {
      expect(toRemainingTimeFormat(seconds)).toEqual(expected);
    });
  });
});
