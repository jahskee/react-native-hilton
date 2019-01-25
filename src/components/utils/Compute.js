/* jshint esversion: 6 */

const Compute = {};

Compute.computeDays = function computeDays(arrival, departure) {
  const diff = Date.parse(departure) - Date.parse(arrival);
  const days = Math.round(diff / (1000 * 60 * 60 * 24));
  return days;
};

export default Compute;
