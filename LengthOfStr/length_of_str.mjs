// 재귀함수로 문자열의 길이 구하기
// 하위문제: 구하려는 문자열의 마지막 원소를 제외한 나머지 부분 ex) abcde 에서 e를 제외한 abcd
function strLength(arr) {
  //기저조건: 배열에 원소가 없을 때
  if (arr[0] == null) return 0;
  // 현재 배열에서 마지막 원소를 뺀 값, 즉 0번 인덱스부터 3번 인덱스까지 문자열을 재귀함수로 호출하고 나머지 원소는 하나이기 때문에 +1
  return strLength(arr.slice(0, -1)) + 1;
}

// 길이가 5인 문자열 선언
let str = "안녕하세요";

let len = strLength(str);
console.log(len); // 5
