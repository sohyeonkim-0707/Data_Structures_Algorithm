import { DoublyLinkedList } from "./DoublyLinkedList.mjs";

class Queue {
  constructor() {
    // 빈 이중 연결리스트를 만들어 초기화
    this.list = new DoublyLinkedList();
  }

  // 📌 데이터 삽입
  // list 의 앞부분에 데이터를 넣기만 하면 됨
  enqueue(data) {
    // insertAt 함수로 인덱스 0에 data 넣어준다.
    this.list.insertAt(0, data);
  }

  // 📌 데이터 제거
  // list 뒷부분에서 데이터 제거
  // 이중연결리스트의 deleteLast 함수를 호출해서 그 노드를 반환하면 끝
  dequeue() {
    // 삭제할 수 없는 경우 예외 처리
    // try - catch
    try {
      return this.list.deleteLast();
    } catch (e) {
      // 예외 발생시
      return null;
    }
  }

  // 📌 front함수 구현
  // 데이터를 제거하지 않고 참조만
  front() {
    // tail값 리턴만
    return this.list.tail;
  }

  // 📌 isEmpty 함수
  isEmpty() {
    // 스택과 동일하게 구현
    return this.list.count == 0;
  }
}

export { Queue };
