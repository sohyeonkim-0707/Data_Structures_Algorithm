import { Queue } from "./Queue.mjs";

// 큐 인스턴스화
let queue = new Queue();

console.log("==== enqueue() 세 번 호출 ====");
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

// front로 리스트의 가장 뒤, 즉 큐의 가장 앞부분을 출력하는 코드 작성
console.log(queue.front());

// 데이터를 dequeue로 차례대로 제거하면서 출력
console.log("==== dequeue() 네 번 호출 ====");
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

// 큐 비었는지 확인
console.log(`isEmpty: ${queue.isEmpty()}`);
