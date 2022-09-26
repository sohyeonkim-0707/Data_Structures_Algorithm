// 피보나치 함수를 메모이제이션 기법을 이용해 성능을 향상시켜 보자.
// 계산하려는 데이터가 있는지 '검색'하고 없다면 함수를 호출해 계산을 하고 그 결과를 '저장' 시키면 된다.
// '헤시 테이블' 자료구조 사용하기 why? 데이터 검색, 삽입이 빠름!
// 해시 테이블의 key를 계산하려는 값을, value로 계산 결과를 저장하면 계산하려는 값의 검색을 아주 빨리 할 수 있음.
// 자바스크립트 객체를 통해 해시 테이블 구현

function fibonacci1(n) {
  if (n == 0 || n == 1) return n;
  return fibonacci1(n - 2) + fibonacci1(n - 1);
}

// 계산 결과를 기억하기 위한 매개변수 memo를 추가
function fibonacci2(n, memo) {
  // 기저조건은 같음
  if (n == 0 || n == 1) return n;
  // 객체(해시테이블)에 해당 값의 계산 결과가 있는지 '검색'하고 n에 대한 검색 결과가 없다면 계산을 하고 그 결과에 대한 값을 저장한다.
  if (memo[n] == null) {
    memo[n] = fibonacci2(n - 2, memo) + fibonacci2(n - 1, memo);
  }
  // if문을 나온 이 부분은 memo 객체에 n의 계산 결과가 들어있다.
  // 매개변수로 전달받은 memo에 계산 결과가 들어있거나, 없다면 if문에 걸려서 계산했기 때문.
  // memo에서 n을 검색해서 return 해준다.
  return memo[n];
}

// test 코드
// data 함수를 통해 실행시간 측정하기
let start = new Date();
console.log(fibonacci1(40)); // 1, 1, 2, 3, '5'
let end = new Date();
console.log(`fibonacci1 함수 실행시간: ${end - start}ms`); // 961ms On2

start = new Date();
console.log(fibonacci2(40, {})); // 5
end = new Date();
console.log(`fibonacci2 함수 실행시간: ${end - start}ms`); // 0ms On의 성능 > 메모이제이션의 기법!!!

// 메모이제이션의 장단점
// 속도가 빠른 장덤
// 속도를 위해서 메모리를 사용한다. > 메모리와 cpu의 속도 차이를 극복하기 위해 캐시 사용
