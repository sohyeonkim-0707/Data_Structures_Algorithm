// 지수함수를 하향식으로 구하기
// 밑 x, 지수 n
// 만약 2의 5승이라면 하위문제는 2의 4승 여기에 2를 한 번 더 곱해주면 됨.
function power(x, n) {
  //기저조건: 지수가 0이면 1이기 때문에 1이 기저조건
  if (n == 0) return 1;
  return power(x, n - 1) * x;
}

console.log(power(2, 5)); //32
