const s = '11:25:15PM';

const timeConversion = (s) => {
  s = s.toUpperCase()
  const chars = s.split(':');
  const hours = chars[0];
  const minutes = chars[1];
  const seconds = chars[2];

  if (seconds[2] === 'P') {

    if (hours < 12) {
      const pm = `${parseInt(hours) + 12}:${minutes}:${seconds.substr(0, 2)}`;
      return pm;
    } else {

      const pm = `${parseInt(hours)}:${minutes}:${seconds.substr(0, 2)}`;

      if (hours > 12) {
        return false

      }
      return pm;
    }

  } else {

    if (hours < 12) {
      const am = `${hours}:${minutes}:${seconds.substr(0, 2)}`;
      return am;
    } else {

      const am = `${hours - 12}0:${minutes}:${seconds.substr(0, 2)}`;

      if (hours > 12) {
        return false

      }
      return am;
    }
  }
}

const result = timeConversion(s);
console.log(s);
console.log(result);

