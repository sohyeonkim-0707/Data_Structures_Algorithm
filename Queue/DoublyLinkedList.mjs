class Node {
  // 1️⃣ 이전 노드를 가리키기 위해서 생성자에 prev 프로퍼티 추가
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    // 추가
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    // 2️⃣ 기존에는 리스트의 시작 부분을 head로 가리켰는데 큐를 구현하기 위해 리스트의 끝을 가리키는 프로퍼티 tail 추가
    this.tail = null;
    this.count = 0;
  }

  printAll() {
    let currentNode = this.head;
    let text = "[";

    while (currentNode != null) {
      text += currentNode.data;
      currentNode = currentNode.next;
      if (currentNode != null) {
        text += ", ";
      }
    }
    text += "]";
    console.log(text);
  }

  clear() {
    this.head = null;
    this.count = 0;
  }

  // 1️⃣ 먼저 데이터가 삽입될 때 이전 노드를 가리키는 코드 추가
  // head에 새로운 노드를 삽입할 때 기존 head가 가리키던 노드의 이전 노드를 새로 삽입한 노드로 설정한다.
  insertAt(index, data) {
    if (index > this.count || index < 0) {
      throw new Error("범위를 넘어갔습니다.");
    }

    let newNode = new Node(data);

    // 데이터가 0개 일 때
    if (index == 0) {
      newNode.next = this.head;
      // head가 null일 때 에러가 나지 않도록 if문 삽입
      if (this.head != null) {
        // head가 가리키는 노드의 이전 노드를 새로운 노드로 설정
        this.head.prev = newNode;
      }
      this.head = newNode;

      // 마지막 인덱스 tail에 추가하는 경우를 나눠주자.
    } else if (index == this.count) {
      // 새로운 노드의 다음 노드를 null로 설정
      newNode.next = null;
      // 새로운 노드의 이전 노드를 tail이 가리키던 노드로 설정
      newNode.prev = this.tail;
      // tail이 가리키던 노드의 다음 노드를 새로운 노드로 설정
      this.tail.next = newNode;
      // 새로 삽입된 마지막 위치의 노드를 tail로 만들어줘야하는데 이 부분은
      // 공통적으로 처리하기 위해 if-else문 밖에 넣어주자.
    } else {
      let currentNode = this.head;

      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      // 3️⃣ head와 tail이 아닌 나머지 부분에 삽입하는 경우를 처리해보자.
      // 새로운 노드의 다음노드를 currentNode의 다음 노드로 설정해주는 코드 다음 줄에
      newNode.next = currentNode.next;
      // 새로운 노드의 이전 노드를 currentNode로 설정해준다.
      newNode.prev = currentNode;
      // 그리고 현재 노드의 다음 노드를 새로운 노드로 설정
      currentNode.next = newNode;
      // 마지막으로 새로 삽입한 노드의 다음 노드의 이전 노드를 새로 삽입한 노드로 설정
      newNode.next.prev = newNode;
    }
    // 2️⃣ 새로 삽입된 마지막 위치의 노드를 tail로 만들어줘야하는데 이 부분은
    // 공통적으로 처리하기 위해 if-else문 밖에 넣어주자.
    // 새로 삽입한 노드의 다음 노드가 null이라면 즉 새로 삽입한 노드가 마지막 노드라면

    if (newNode.next == null) {
      // tail을 새로 삽입한 마지막 노드로 설정
      this.tail = newNode;
    }

    this.count++;
  }

  insertLast(data) {
    this.insertAt(this.count, data);
  }

  deleteAt(index) {
    if (index >= this.count || index < 0) {
      throw new Error("제거할 수 없습니다.");
    }

    let currentNode = this.head;

    // 1️⃣ 가장 먼저 head에 있는 노드를 제거하는 경우, head에 있는 노드를 제거하기 때문에 삭제할 노드로 head가 가리키는 노드로 설정
    if (index == 0) {
      let deletedNode = this.head;
      // 📌 if 문으로 데이터가 하나 남은 경우와 그렇지 않은 경우 else를 구분해주기
      if (this.head.next == null) {
        // 데이터가 하나 남은 경우로 head의 다음 노드가 null인 경우
        // 이때는 간단하게 head와 tail 모두 null로 설정해주면 리스트가 완벽하게 비워짐.
        this.head = null;
        this.tail = null;
        // 📌 그렇지 않은 경우
        // 데이터가 하나보다 더 많은 경우는 else문으로 처리한다.
      } else {
        // head에 있는 노드가 제거되기 때문에 head의 다음 노드를 새로운 head로 만들어주고
        this.head = this.head.next;
        // 새로 head가 된 노드의 이전 노드를 null로 설정해 연결을 끊어줌.
        this.head.prev = null;
      }
      // count를 하나 줄여주고 리턴
      this.count--;
      return deletedNode;

      // 2️⃣ else if 문을 넣어서 마지막 노드를 제거하는 경우 구분
    } else if (index == this.count - 1) {
      // tail이 가리키는 노드를 삭제할 노드로 설정
      let deletedNode = this.tail;
      // tail 이전 노드의 다음 노드를 null로 설정
      this.tail.prev.next = null;
      // tail 이전 노드를 tail로 설정
      this.tail = this.tail.prev;
      // count를 줄여주고 삭제한 노드를 return
      this.count--;
      return deletedNode;
      // 이제 head와 tail을 제거하는 경우가 아닌 경우 즉, 나머지 부분을 제거하는 경우를 else로 처리
    } else {
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      // 현재 노드의 다음 노드를 삭제할 노드로 지정
      let deletedNode = currentNode.next;
      // 현재 노드의 다음 노드를 현재 노드의 다음 노드의 다음 노드로 설정하는 것과 똑같다.
      currentNode.next = currentNode.next.next;
      // 이전 노드 설정하기
      // 헌재 노드의 다음 노드의 이전 노드를 현재 노드로 설정
      currentNode.next.prev = currentNode;
      // count를 줄여주고 삭제된 노드 return
      this.count--;
      return deletedNode;
    }
  }

  deleteLast() {
    return this.deleteAt(this.count - 1);
  }

  getNodeAt(index) {
    if (index >= this.count || index < 0) {
      throw new Error("범위를 넘어갔습니다.");
    }

    let currentNode = this.head;

    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }
}

export { Node, DoublyLinkedList };
