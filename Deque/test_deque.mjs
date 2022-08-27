import { Deque } from "./Deque.mjs";

// Deque 개채 만들어주기
let deque = new Deque();

// 📌  addFrist
console.log("=== addFrist ===");
// 덱이 비었는지 isEmpty() 함수 출력
console.log(`isEmpty: ${deque.isEmpty()}`);
// addFirst 함수로 1부너 5까지 넣어준다.
deque.addFirst(1);
deque.addFirst(2);
deque.addFirst(3);
deque.addFirst(4);
deque.addFirst(5);
// printAll 로 모든 요소 출력
deque.printAll();
// 덱이 비었는지 isEmpty() 함수 출력
console.log(`isEmpty: ${deque.isEmpty()}`);
console.log("\n");

// 📌 removeFirst
// 호출할 때마다 printAll 함수를 호출해서 변화 출력
console.log("=== removeFirst ===");
deque.removeFirst();
deque.printAll();
deque.removeFirst();
deque.printAll();
deque.removeFirst();
deque.printAll();
deque.removeFirst();
deque.printAll();
deque.removeFirst();
deque.printAll();
// 덱이 비었는지 isEmpty() 함수 출력
console.log(`isEmpty: ${deque.isEmpty()}`);
console.log("\n");

// 📌 addLast
// addLast 함수로 1부터 5까지 삽입
console.log("=== addLast ===");
deque.addLast(1);
deque.addLast(2);
deque.addLast(3);
deque.addLast(4);
deque.addLast(5);
deque.printAll();
// 덱이 비었는지 isEmpty() 함수 출력
console.log(`isEmpty: ${deque.isEmpty()}`);
console.log("\n");

// 📌 removeLast
console.log("=== removeLast ===");
deque.removeLast();
deque.printAll();
deque.removeLast();
deque.printAll();
deque.removeLast();
deque.printAll();
deque.removeLast();
deque.printAll();
deque.removeLast();
deque.printAll();
// 덱이 비었는지 isEmpty() 함수 출력
console.log(`isEmpty: ${deque.isEmpty()}`);
