// 매개변수 4개
// 원반의 숫자 count
// 원반이 처음 꽂혀있는 기둥 from
// 최종적으로 꽂힐 기둥 to
// 원반들이 이동을 위해 일시적으로 사용되는 기둥 tmep
// 하향식 계산 방식으로 원반을 옮겨보자
function hanoi(count, from, to, temp) {
  // 기저조건: 원반이 없을 때
  if (count == 0) return;
  hanoi(count - 1, from, temp, to); // 기둥 A에 있는 원반 1,2는 모두 B로 이동
  console.log(`원반 ${count}를 ${from}에서 ${to}로 이동`);
  hanoi(count - 1, temp, to, from);
}

// 원반 개수, A 기둥, B 기둥, C 기둥
hanoi(3, "A", "B", "C");
