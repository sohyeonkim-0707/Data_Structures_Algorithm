function BubbleSort(arr) {
  // 배열을 순회할 for 문을 만들어주는데
  // 만약 배열에 원소가 네 개가 존재한다면 자리 교체는 최대 3번을 해야하기 때문에
  // 배열의 길이보다 1작은 횟수만큼 반복시켜줘야한다. arr.length -1
  for (let i = 0; i < arr.length - 1; i++) {
    // 2번째 for 문은 첫 번째 원소부터 정렬이 된 원소의 이전 원소보다 하나 이전의 원소까지 순회해야한다.
    for (let j = 0; j < arr.length - i - 1; j++) {
      // 앞의 데이터가 뒤의 데이터보다 더 크다면 덮어쓸 데이터는 잃어버리지 않게 다른 변수에 저장해주고
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        // 앞의 데이터를 뒤의 데이터로 덮어쓴다.
        arr[j] = arr[j + 1];
        arr[j + 1] = temp; // 배열의 두 숫자가 교환
      }
    }
  }
}

// 정렬되지 않은 배열 선언
let arr = [4, 2, 3, 1];

console.log(" === 정렬 전 ===");
console.log(arr);
BubbleSort(arr);

console.log(" === 정렬 후 ===");
console.log(arr);
