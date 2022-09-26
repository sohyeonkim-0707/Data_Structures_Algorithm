// 타뷸레이션
function fibonacci1(n) {
  if (n == 0 || n == 1) return n;
  return fibonacci1(n - 2) + fibonacci1(n - 1);
}
function fibonacci2(n, memo) {
  if (n == 0 || n == 1) return n;
  if (memo[n] == null) {
    memo[n] = fibonacci2(n - 2, memo) + fibonacci2(n - 1, memo);
  }
  return memo[n];
}

// 함수 추가
function fibonacci3(n) {
  // 예외 조건: 0이나 1이 들어오면 그대로 return
  if (n <= 1) return n;
  // 계산 결과를 저장할 테이블 생성

  // 먼저 0과 1로 초기화하고 상향식으로 밑에서부터 계산해 테이블에 결과를 저장
  let table = [0, 1];

  for (let i = 2; i <= n; i++) {
    table[i] = table[i - 2] + table[i - 1];
  }
  // 테이블에 저장된 결과를 return
  return table[n];
}

let start = new Date();
console.log(fibonacci1(40));
let end = new Date();
console.log(`fibonacci1 함수 실행시간: ${end - start}ms`);

start = new Date();
console.log(fibonacci2(40, {}));
end = new Date();
console.log(`fibonacci2 함수 실행시간: ${end - start}ms`);

// fibonacci3 테스트 코드 추가
start = new Date();
console.log(fibonacci3(40));
end = new Date();
console.log(`fibonacci3 함수 실행시간: ${end - start}ms`); // 0ms

// fibonacci2의 경우 여러 번의 함수 호출로 메모리 공간의 스택을 차지하고
// 메모이제이션을 위한 해시 테이블 공간까지 차지하기 때문에 메모리를 더 많이 사용한다.

// 반면 fibonacci3는 적은 메모리 사용인데도 불구하고 빠른 시간을 보인다.

// 문제를 해결할 때 재귀가 직관적이지 않을때는 상향식 접근인 타뷸레이션을 사용해 메모리도 절약하고 속도도 빠르게 해결할 수 있다.
