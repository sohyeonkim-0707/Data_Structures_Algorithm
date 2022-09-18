function factorial(number) {
  // 기저조건
  if (number == 1 || number == 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

// 5!
// 5X4X3X2X1
console.log(factorial(5));
