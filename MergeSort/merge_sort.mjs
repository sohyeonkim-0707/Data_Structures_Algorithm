// 병합정렬: 재귀로 정렬하는 알고리즘
// 해결해야할 문제 > 정렬
// 이 문제를 어떻게 쪼개고 어떻게 하나씩 해결해야하는지 알아보자.
function MergeSort(arr, leftIndex, rightIndex) {
  if (leftIndex < rightIndex) {
    let midIndex = parseInt((leftIndex + rightIndex) / 2);
    MergeSort(arr, leftIndex, midIndex);
    MergeSort(arr, midIndex + 1, rightIndex);
    Merge(arr, leftIndex, midIndex, rightIndex);
  }
}

function Merge(arr, leftIndex, midIndex, rightIndex) {
  let leftAreaIndex = leftIndex;
  let rightAreaIndex = midIndex + 1;

  let tempArr = [];
  tempArr.length = rightIndex + 1;
  tempArr.fill(0, 0, rightIndex + 1);

  let tempArrIndex = leftIndex;
  while (leftAreaIndex <= midIndex && rightAreaIndex <= rightIndex) {
    if (arr[leftAreaIndex] <= arr[rightAreaIndex]) {
      tempArr[tempArrIndex] = arr[leftAreaIndex++];
    } else {
      tempArr[tempArrIndex] = arr[rightAreaIndex++];
    }
    tempArrIndex++;
  }
  if (leftAreaIndex > midIndex) {
    for (let i = rightAreaIndex; i <= rightIndex; i++) {
      tempArr[tempArrIndex++] = arr[i];
    }
  } else {
    for (let i = leftAreaIndex; i <= midIndex; i++) {
      tempArr[tempArrIndex++] = arr[i];
    }
  }
  for (let i = leftIndex; i <= rightIndex; i++) {
    arr[i] = tempArr[i];
  }
}

// test
let arr = [3, 5, 2, 4, 1, 7, 8, 6];
console.log("=== 정렬 전 ===");
console.log(arr);

MergeSort(arr, 0, arr.length - 1);

console.log("=== 정렬 후 ===");
console.log(arr);

// 병합 정렬의 성능
// O(nlogn)

// 병합 정렬의 장단점
// 성능은 O(nlogn)으로 지금까지 배운 정렬보다 훨씬 좋음
// 이해와 구현이 어려운 단점
