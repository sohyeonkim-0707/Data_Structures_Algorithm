import { DoublyLinkedList } from "../Queue/DoublyLinkedList.mjs";

class Deque {
  constructor() {
    this.list = new DoublyLinkedList();
  }

  // 📌 printAll
  // 이중연결리스트의 printAll()함수를 호출한다.
  printAll() {
    this.list.printAll();
  }

  // 연결리스트에서 head에 데이터 삽입, 제거는 O(1)의 성능을 보였다. 이를 이용해서 addFirst와 removeFist()를 아주 간다하게 구현할 수 있다.
  // 📌 addFirst
  // list의 insertAt 함수를 호출하고 인덱스를 0으로 주면 O(1)의 성능으로 헤드에 삽입된다.
  addFirst() {
    this.list.insertAt(0, data);
  }

  // 📌 removeFirst
  // list의 deleteAt 함수의 인덱스를 0으로 주면 O(1)의 성능으로 데이터를 제거한다.
  removeFirst() {
    return this.list.deleteAt(0);
  }

  // 큐를 구현할 때 DoublyLinkedList클래스 내 insertAt 함수에서 마지막 인덱스에 삽입하는 경우
  // tail을 이용해서 O(1)의 성능으로 삽입하도록 수정했다.

  // addLast 함수도 insertAt 함수를 이용하면 쉽게 구현할 수 있다.

  // 📌 addLast
  // list의 insertAt 함수의 인덱스로 현재 리스트의 카운트를 넣어주면 마지막 원소의 삽입을 뜻한다.
  addLast() {
    this.list.insertAt(this.list.count, data);
  }

  // 📌 deleteLast() 함수를 호출해서 얻은 노드를 리턴
  removeLast() {
    return this.deleteLast();
  }

  // 📌 isEmpty
  // 덱이 비었는지 아닌지 확인
  isEmpty() {
    return this.list.count == 0;
  }
}

export { Deque };
