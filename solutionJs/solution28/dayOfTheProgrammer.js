const dayOfProgrammer = (year) => {
  let gregorianCalendar = false;
  let julianCalendar = false;
  let leapYear = [];

  if (year === 1918) {
    return `${26}.${0}${9}.${year}`;
  }

  if (year >= 1700 && year <= 1917) {
    julianCalendar = true
  } else {
    gregorianCalendar = true
  }

  if (julianCalendar === true) {
    if (year % 4 === 0) {
      return `${12}.${0}${9}.${year}`;
    } else {
      return `${13}.${0}${9}.${year}`;
    }
  } else if (gregorianCalendar === true) {

    if (year % 400 === 0) {
      leapYear.push(1);
    } else {
      leapYear.push(0);
    }

    if (year % 100 === 0) {
      leapYear.push(1);
    } else {
      leapYear.push(0);
    }

    if (year % 4 === 0) {
      leapYear.push(1);
    } else {
      leapYear.push(0);
    }
    if (leapYear[0] - leapYear[1] + leapYear[2] === 1) {
      return `${12}.${0}${9}.${year}`;
    } else {
      return `${13}.${0}${9}.${year}`;
    }
  }
}

const result = dayOfProgrammer(1918);
result
