function factorTest(num, multiples, words) {
  if (multiples.constructor != Array || words.constructor != Array) {
    return undefined;
  } else if (num % multiples[0] === 0 && num % multiples[1] === 0) {
    return words[0] + words[1];
  } else if (num % multiples[0] === 0) {
    return words[0];
  } else if (num % multiples[1] === 0) {
    return words[1];
  } else {
    return num;
  }
}

function loopyLighthouse(range, multiples, words) {
  if (range.constructor != Array) {
    return undefined;
  } else if (range[0] < range[1]) {
    for (var i = range[0]; i <= range[1]; i++ ) {
      console.log(factorTest(i,multiples,words));
    }
  }
}