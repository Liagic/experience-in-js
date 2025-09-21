function isNumber() {
  let n = prompt('Input text or number!');
  alert(Number(n) === 10 ? `${n} is equal to 10` : `${n} isn't equal to 10`);
  console.log(
    Number(n) === 10 ? `${n} is equal to 10` : `${n} isn't equal to 10`
  );
}

function quartal() {
  let n = Math.floor(Math.random() * 59);
  console.log(`${n} is in ${parseInt(n / 15) + 1} quartall`);
}
function season() {
  let n = Number(prompt('Enter your digit from 1 to 4'));
  switch (n) {
    case 1:
      console.log('Winter');
      break;
    case 2:
      console.log('Spring');
      break;
    case 3:
      console.log('Summer');
      break;
    case 4:
      console.log('Autumn');
      break;
    default:
      console.log(`There is no solution for your ${n}`);
  }
}

function minutesToHoursAndDays() {
  let n = parseInt(prompt('Enter time in minutes:'));
  console.log(
    n / 60 >= 24
      ? `${parseInt(n / 60 / 24)} day(s)  ${parseInt((n / 60) % 24)
          .toString()
          .padStart(2, '0')} : ${(n % 60).toString().padStart(2, '0')} h:m`
      : parseInt(n / 60)
          .toString()
          .padStart(2, '0') +
          ':' +
          (n % 60).toString().padStart(2, '0')
  );
}

function authorization() {
  console.log(
    prompt('Enter your login!') === 'Liagic'
      ? prompt('Enter your password') == '1234'
        ? 'Welcome Liagic!'
        : ' Incorrect password!!!!!!!'
      : 'Incorect Login!!!!'
  );
}

function fromTOSimple() {
  let n = 0;
  while (true) {
    console.log(n);
    if (n === 20) {
      return;
    }
    n++;
  }
}

function fromToAdvanced(min = 0, max = 10) {
  let sum = 0;
  for (let i = max; i >= min; i--) {
    console.log(i);
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}
function min(a = NaN, b = NaN) {
  return Number.isNaN(a) || Number.isNaN(b) ? 'Not a number!' : Math.min(a, b);
}
function isAdult() {
  console.log(
    confirm('Are you over 18 years old?')
      ? 'Welcome on board!!'
      : 'Meh, you to young for this!\nMaybe next time'
  );
}

function fizzBuzz(num) {
  if (num === 0) {
    return `It's 0, you can't divide by 0!\nNo more for you fizzbuzz!`;
  }
  return num % 3 == 0
    ? num % 5 == 0
      ? 'fizzbuzz'
      : 'fizz'
    : num % 5 == 0
    ? 'buzz'
    : '';
}

function moreOneHundred() {
  while (true) {
    u_input = prompt('type a number above 100');

    if (u_input === null || Number(u_input) >= 100) {
      console.log(`${u_input}`);
      return;
    }
  }
}

function testURL(url) {
  return !url.includes('my-site')
    ? url
    : url[url.length - 1] !== '/'
    ? `${url}/`
    : url;
}
// isNumber();
// quartal();
// season();
// minutesToHoursAndDays();
// authorization();
//fromTOSimple();
// console.log(fromToAdvanced());
// console.log(min('2', 55));
// isAdult();
// console.log(fizzBuzz(0));
// moreOneHundred();
// console.log(testURL('https://my-site.com/about'));
