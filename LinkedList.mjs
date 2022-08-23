class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.count = 0;
  }
  insertAt(index, data) {
    // 예외처리
    if (index > this.count || index < 0) {
      throw new Error("범위를 넘어갔습니다.");
    }
    // 삽입할 노드 생성
    let newNode = new Node(data);
  }
}

export { Node };
