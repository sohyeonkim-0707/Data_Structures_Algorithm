import { DoublyLinkedList } from "../Queue/DoublyLinkedList.mjs";

class Deque {
  // 생성자에 빈 이중연결리스트를 만들어주면서 초기화
  constructor() {
    this.list = new DoublyLinkedList();
  }

  // 📌 printAll
  // 이중연결리스트의 printAll()함수를 호출한다.
  printAll() {
    this.list.printAll();
  }

  // 📌 addFirst
  // list의 insertAt 함수를 호출하고 인덱스를 0으로 주면 O(1)의 성능으로 헤드에 삽입된다.
  addFirst(data) {
    this.list.insertAt(0, data);
  }

  // 📌 removeFirst
  // list의 deleteAt 함수의 인덱스를 0으로 주면 O(1)의 성능으로 데이터를 제거한다.
  removeFirst() {
    return this.list.deleteAt(0);
  }

  // 📌 addLast
  // list의 insertAt 함수의 인덱스로 현재 리스트의 카운트를 넣어주면 마지막 원소의 삽입을 뜻한다.
  addLast(data) {
    this.list.insertAt(this.list.count, data);
  }

  // 📌removeLast
  // 📌 deleteLast() 함수를 호출해서 얻은 노드를 리턴
  removeLast() {
    return this.list.deleteLast();
  }

  // 📌 isEmpty
  // 덱이 비었는지 아닌지 확인
  isEmpty() {
    return this.list.count == 0;
  }
}

export { Deque };
