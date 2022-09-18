function myFunction(number) {
  if (number > 3) return; // 기저조건
  console.log(number);
  myFunction(number + 1);
}
myFunction(1);

// 8685 까지 갔다가 자동으로 종료 왜?
// 콜스택 메모리 공간이 가득 차서
// 재귀함수는 탈출조건 즉 기저 조건이 반드시 있어야한다.
// 자기자신을 호출하다가 특정 조건이 나오면 함수를 종료한다.
// 재귀함수는 for문을 대신하여 쓰이기 보단 더 복잡한 내용을
// 쉽게 해결하기 위해 사용된다.
// 팩토리얼!!!
