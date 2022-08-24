// 이전에 만든 연결리스트 import
import { LinkedList } from "../LnkedList/LinkedList.mjs";

// stack class 생성
class Stack {
  // 생성자를 만들어 스택이 초기화할 때 빈 리스트 생성
  constructor() {
    this.list = new LinkedList();
  }

  // 📌 push()
  // push() 함수는 연결리스트의 head에 삽입하는데
  // 이는 연결리스트의 insertAt() 함수로 indexO에 데이터를 삽입한다.
  push(data) {
    this.list.insertAt(0, data);
  }

  // 📌 pop()
  // 연결리스트의 head에서 꺼내면 되기 때문에
  // deleteAt() 함수로 index O를 제거하면 된다.
  pop() {
    // 제거된 노드는 return 으로 반환
    // 예외가 발생하면 nulld을 return
    // return을 try로 감싸주고 에러를 캐치하면 null return
    try {
      return this.list.deleteAt(0);
    } catch (e) {
      return null;
    }
  }

  // 📌 peek()
  // 스택의 top에 있는 데이터를 참조만 하고 데이터를 제거하지 않는다.
  // 연결리스트의 getNodeAt() 함수로 첫 번째 데이터를 읽어오고 리턴
  peek() {
    return this.list.getNodeAt(0);
  }

  // 📌 isEmpty()
  // 스택이 비었으면 true, 비어있지 않으면 false 리턴
  // 이는 연결리스트의 count 0와 비교하면 알 수 있다.
  isEmpty() {
    return this.list.count == 0;
  }
}
export { Stack };
