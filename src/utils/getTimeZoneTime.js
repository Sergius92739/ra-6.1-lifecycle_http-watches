export const getTimeZoneTime = (zone, deg = 6) => {
  const day = new Date();
  const hours = (day.getUTCHours() + +zone) * 30;
  const minutes = day.getUTCMinutes() * deg;
  const seconds = day.getUTCSeconds() * deg;
  return { hours, minutes, seconds };
}
