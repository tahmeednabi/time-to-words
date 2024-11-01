// expecting time to be a string in the format like '8:15' or '12:30'
const numberToWordMap = {
  0: 'twelve',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'quarter',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  21: 'twenty one',
  22: 'twenty two',
  23: 'twenty three',
  24: 'twenty four',
  25: 'twenty five',
  26: 'twenty six',
  27: 'twenty seven',
  28: 'twenty eight',
  29: 'twenty nine',
};

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
