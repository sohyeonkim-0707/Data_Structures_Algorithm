// 배열안의 값 구하기
// 하향식으로 재귀함수 구현 > 하위문제의 결과에 마지막 원소만 더해주면 된다.
function sumArray(arr) {
  // 3️⃣ 기저조건
  // 배열의 원소가 하나일 때는 하나의 원소가 배열의 전체 합을 나타내므로 해당 원소 리턴!
  if (arr.length == 1) return arr[0];

  // 1️⃣ 배열을 0번 인덱스부터 마지막 인덱스 한 칸 전까지 자른 배열의 합
  // 2️⃣ [1,2,3,4,5] 면 1에서 4까지 배열의 합 구하고 이 결과에 배열의 마지막 원소를 더해준다.
  return sumArray(arr.slice(0, -1)) + arr[arr.length - 1];
}

let arr = [1, 2, 3, 4, 5];
let sum = sumArray(arr);
console.log(sum); //15
