const { numberToWordMap } = require('./num-to-words-map');

// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  const split = time.split(':');
  const moduloHour = Number(split[0] % 12);
  const hour = String(moduloHour);
  const minutes = split[1];
  const numMinutes = Number(minutes);

  if (numMinutes === 0) {
    if (Number(split[0]) === 0) {
      return 'midnight';
    }
    if (Number(split[0]) === 12) {
      return 'midday';
    }

    return `${numberToWordMap[hour]} o' clock`;
  } if (numMinutes === 30) {
    return `half past ${numberToWordMap[hour]}`;
  } if (numMinutes < 30) {
    return `${numberToWordMap[minutes]} past ${numberToWordMap[hour]}`;
  }

  const remaining = 60 - numMinutes;
  const nextHour = Number(hour) + 1;
  return `${numberToWordMap[remaining]} to ${numberToWordMap[nextHour]}`;
}

module.exports = { convertTimeToWords };
