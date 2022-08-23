import { Node, LinkedList } from "./LinkedList.mjs";

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);

node1.next = node2;
node2.next = node3;

console.log(node1.data);
console.log(node1.next.data);
console.log(node1.next.next.data);

let list = new LinkedList();

console.log("=== insertAt() 다섯 번 호출 ===");
list.insertAt(0, 0);
list.insertAt(1, 1);
list.insertAt(2, 2);
list.insertAt(3, 3);
list.insertAt(4, 4);
list.printAll();
console.log("=== clear() 함수 호출 ===");
list.clear();
list.printAll();

console.log("=== insertLast() 세 번 호출 ===");
list.insertLast(0);
list.insertLast(1);
list.insertLast(2);
list.printAll();

console.log("=== deleteAt() 호출 ===");
// 0번 인덱스 삭제
list.deleteAt(0);
list.printAll();
// 1번 인덱스 삭제
list.deleteAt(1);
list.printAll();

console.log("=== deleteLast() 호출 ===");
// 현재 리스트에는 데이터 한 개 밖에 없기 때문에 하나를 더 삽입해준다.
list.insertLast(5);
// deleteLast() 함수 세 번 호출
list.deleteLast();
list.deleteLast();
list.printAll();

console.log("=== getNodeAt() 호출 ===");
// 현재 리스트가 비어있으니 데이터 다섯 개 추가
list.insertLast(1);
list.insertLast(2);
list.insertLast(3);
list.insertLast(4);
list.insertLast(5);
// 변수 선언하고 getNodeAt() 함수로 두 번째 index의 노드를 가져온다.
let secondNode = list.getNodeAt(2);
// 마지막으로 secondNode 출력
console.log(secondNode);
