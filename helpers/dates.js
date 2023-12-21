import moment from 'moment';

/**
 * Updates the given date with a new date with keeping the time.
 *
 * @param {Date} date - The original date to be updated.
 * @param {Date} newDate - The new date to update the original date with.
 * @return {string} The updated date
 */
export function updateDateWithNewDate(date, newDate) {
  const updatedDate = new Date(date);
  updatedDate.setFullYear(newDate.getFullYear());
  updatedDate.setMonth(newDate.getMonth());
  updatedDate.setDate(newDate.getDate());
  return updatedDate;
}

/**
 * Formats a given date to a readable time string example: 11:30 AM.
 *
 * @param {Date} date - The date and time to be formatted.
 * @return {string} The formatted time string.
 */
export function formatDateTime(date) {
  return moment(date).format('hh:mm A');
}

/**
 * Formats a given date to a readable date string example: Monday, August 01, 1996.
 *
 * @param {Date} date - The date to be formatted.
 * @return {string} The formatted date.
 */
export function formatLongDate(date) {
  return moment(date).format('dddd, MMMM DD, YYYY');
}
