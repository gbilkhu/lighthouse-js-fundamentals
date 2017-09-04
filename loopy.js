function factorTest(num) {
  if (num % 3 === 0 && num % 4 === 0) {
    return "LoopyLighthouse";
  } else if (num % 3 === 0) {
    return "Loopy";
  } else if (num % 4 === 0) {
    return "Lighthouse";
  } else {
    return num;
  }
}

for (var i = 100; i <= 200; i++ ) {
  console.log(factorTest(i));
}