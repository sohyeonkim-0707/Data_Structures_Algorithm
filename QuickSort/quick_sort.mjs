// ✅ 퀵 정렬: 병합 정렬과 같이 분할 정복 알고리즘에 속한다. 재귀 사용
// 피벗
// leftStartIndex: 왼쪽에서 오른쪽으로 이동하는 변수: 오른쪽으로 이동하다가 피벗보다 큰 값을 만나면 멈춤
// rightStartIndex: 오른쪽에서 왼쪽으로 이동하는 변수: 왼쪽으로 이동하다가 피벗보다 작은 값을 만나면 멈춤
// leftStartIndex와 rightStartIndex가 멈추면 이 둘의 값을 교환 > swap
// 서로 지나쳤다면 이동하지 않음.
// 한 번 정렬될 때마다 피벗이 정렬되고 정렬된 배열을 좌우로 나눠서 같은 방식으로 재귀호출 해 모든 배열 정렬

function quickSort(arr, left, right) {
  if (left <= right) {
    let pivot = divide(arr, left, right);
    quickSort(arr, left, pivot - 1);
    quickSort(arr, pivot + 1, right);
  }
}

// 피벗을 지정하고 정렬하는 함수
function divide(arr, left, right) {
  let pivot = arr[left];
  let leftStartIndex = left + 1;
  let rightStartIndex = right;
  while (leftStartIndex <= rightStartIndex) {
    while (leftStartIndex <= right && pivot >= arr[leftStartIndex]) {
      leftStartIndex++;
    }
    while (rightStartIndex >= left + 1 && pivot <= arr[rightStartIndex]) {
      rightStartIndex--;
    }
    if (leftStartIndex <= rightStartIndex) {
      swap(arr, leftStartIndex, rightStartIndex);
    }
  }
  swap(arr, left, rightStartIndex);
  return rightStartIndex;
}

// 두 값을 교환하는 함수
function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

// test 코드
let arr = [5, 3, 7, 2, 6, 4, 9, 1, 8];
console.log("==== 정렬 전 ====");
console.log(arr);

quickSort(arr, 0, arr.length - 1);
console.log("==== 정렬 후 ====");
console.log(arr);

// 퀵 정렬의 성능
// 피벗을 기준으로 데이터가 한 개가 될 때까지 배열을 반으로 나눈다.
// 데이터가 한 개가 될 떄까지 반으로 나눔 logn
// 이 작업을 데이터 n개만큼 반복해야 하므로 n을 곱함
// 최악의 경우: 피벗이 한쪽으로 치우친 경우 > o(n2)
// 하지만 대부분의 겨웅 피벗을 중간값으로 설정하므로 배열을 매번 반으로 가를 수 있음
// ⍬(nlogn)의 성능을 가짐
// 성능만 보면 병합정렬이 더 좋다고 볼 수 있는데 실제로 병합 정렬과 비교하면 퀵 정렬이 더 적은 비교와 더 작은 메모리 공간을 차지한다.
// 퀵 정렬 > 병합 정렬

// 퀵 정렬의 장단점
// 병합정렬과 동일
