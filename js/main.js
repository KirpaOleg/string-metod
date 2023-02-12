const stringEl = document.querySelector('.string');
const string = 'HELLO WORLD Hello, world!';
const string2 = 'SVETA V shoke';
const string3 = '     SVETA V shoke    ';
stringEl.innerHTML = `string - ${string}<br>string2 - ${string2}<br>`;

const resultEl = document.querySelector('.result');

// const result = string.charAt(0);

// const result = string.charAt(string.length - 1);

// const result = string.charCodeAt(0);
//unicode-table.com/ru/

// const result = string.concat(string2);

// const result = string.endsWith('world!');

// const result = string.fromCharCode(72);

// const result = string2.includes('V');

// const result = string.indexOf('Hello,');

// const result = string.localeCompare('string2');

// const result = string.match('llo,');

// const result = string.repeat(2);

// const result = string.replace('Hello', 'By');

// const result = string.search('Hello,');

// const result = string.slice(2, 8);

// const result = string.split('');

// const result = string.startsWith('HELLO');

// const result = string.substr(12);

// const result = string.substring(10);

// const result = string.toLocaleLowerCase();

// const result = string.toLocaleUpperCase();

// const result = string.toLowerCase();

// const result = string.toString();

// const result = string.toUpperCase();

// const result = string3.trim();

// const result = string3.valueOf();

// const result = string.anchor('yakor');

// const result = string.big();

// const result = string.bold();

// const result = string.fixed();

// const result = string.fontcolor('red');

// const result = string.fontsize('40');

// const result = string.italics();

// const result = string.link('https://www.google.com');

// const result = string.small();

// const result = string.strike();

// const result = string.sub();

const result = string + string2.sup();

resultEl.innerHTML = result;
console.log(resultEl);
