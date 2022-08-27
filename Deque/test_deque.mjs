import { Deque } from "./Deque.mjs";

// Deque 개채 만들어주기
let deque = new Deque();

//addFrist 함수 호출
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

// removeFirst 호출
// 호출할때마다 printAll 함수를 호출해서 변화 출력
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

// removeLast
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

// 덱을 이용하면 스택과 큐를 가난하게 만들 수도 있다.
// addFirst와 removeFirst를 이용하면 스택이 되고
// 마찬가지로 addLast와 removeLast를 이용해소 스택이 된다.

// 반대로 큐를 만들기 위해서는 addFirst와 removeLast를 사용하거나
// addLast 와 removeFirst를 이용하면 된다.
