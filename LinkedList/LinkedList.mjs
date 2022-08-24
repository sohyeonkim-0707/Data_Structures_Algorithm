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

  // 📌 printAll
  printAll() {
    //먼저 currentNode 변수가 head를 가리키게한다.
    let currentNode = this.head;
    // 1️⃣ text변수에 문자열로 대괄호를 넣어준다.
    let text = "[";
    // 리스트의 끝까지 순회하는데 currentNode가 null이 될 때까지 계속 next 노드를 참조해주면 된다.
    while (currentNode != null) {
      // 2️⃣text 변수에 currentNode의 데이터를 저장해준다.
      text += currentNode.data;
      // currentNode를 currentNode의 next노드로 가리킨다.
      currentNode = currentNode.next;

      // 3️⃣ currentNode가 마지막 데이터가 아니라면 콤마로 구분해준다
      if (currentNode != null) {
        // 모든 노드를 순회했다면 text에는 "[0,1,2"와 같이 저장되어있다.
        text += ", ";
      }
    }
    // text 변수에 닫는 대괄호를 넣어서 모양을 완성시켜준다.
    text += "]";
    // text 변수 출력
    console.log(text);
  }

  // 📌 clear
  // head가 null을 가리키게 해서 참조하는 것이 없게 만들어주고
  clear() {
    this.head = null;
    // count를 0으로 만들어주면 리스트는 비워진다.
    this.count = 0;
  }

  // 📌 insertAt
  insertAt(index, data) {
    // 예외처리
    if (index > this.count || index < 0) {
      throw new Error("범위를 넘어갔습니다.");
    }
    // 삽입할 노드 생성
    let newNode = new Node(data);
    // if 문에서 리스트의 가장 앞부분에 삽입하는 경우, 즉 인덱스가 0인 경우를 처리하고
    if (index == 0) {
      // 새로 생성한 노드의 next가 head를 가리키게 하고,
      newNode.next = this.head;
      // 새로 생성한 노드를 head로 변경한다.
      this.head = newNode;
      // else 문에서는 가장 앞부분 삽입을 제외한 경우를 처리한다.
      // 원하는 인덱스까지 노드를 타고 들어가서 새로 삽입하는 경우
      // 만약 인덱스 3에 삽입한다면 head 노드에서 세 번째 떨어진 노드에 삽입하는 경우이다.
      // currentNode로 세 번째 떨어진 노드 전까지 이동하고 newNode가 curretNode가 가리키던 노드,
      // 즉 세 번째 노드(9)를 가리키게 한다.
      // 그리고 currentNode(7)가 새로운 노드(data)를 가리키게 하면 끝난다.
    } else {
      // 먼저 삽입하려는 노드 바로 전까지 가기 위한 변수를 하나 만든다.
      // head에서 시작하기 때문에 head로 초기화해준다.
      let currentNode = this.head;
      // 목표 인덱스 바로 전까지 next를 이용해 currentNode를 이동시킨다.
      // 만약 목표 인덱스가 3이라고 하면 currentNode는 두 번째 떨어진 노드(7)까지 접근한다.
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      // 목표 인덱스의 바로 전 노드까지 왔다면 이제 간단하다.
      // 새로운 노드가 currentNode의 next 노드를 가리키고
      newNode.next = currentNode.next;
      // currentNode(7)가 새로운 노드를 가리키면 된다.
      currentNode.next = newNode;
    }
    // 새로운 노드가 삽입되었으니 if 문과 else 문 밖에 count를 하나 올려준다.
    this.count++;
  }

  //  1️⃣ 먼저 함수를 정의해준다.
  insertLast(data) {
    // 2️⃣ insertAt() 함수를 호출해서 indext에 리스트의 크기인 count를 넣어 가장 뒤에 데이터를 삽입한다.
    this.insertAt(this.count, data);
  }

  deleteAt(index) {
    // 1️⃣ insertAt() 함수와 마찬가지로 에러처리를 해준다.
    // 리스트의 크기를 넘어서면 에러를 발생시킨다.
    if (index >= this.count || index < 0) {
      throw new Error("제거할 수 없습니다.");
    }

    // 2️⃣ 노드를 순회할 변수(currentNode)를 만들어준다.
    let currentNode = this.head;
    // insertAt() 함수와 마찬가지로 두 가지 상황을 고려한다. if문 사용
    // 1) head 노드, 즉 첫 번째 노드를 제거하는 상황
    if (index == 0) {
      // 삭제된 노드를 리턴하기 위해 삭제될 노드를 저장
      let deletedNode = this.head;
      // head를 head의 next 노드로 설정해준다.
      this.head = this.head.next;
      // 삭제됐으니 count도 하나 줄여준다.
      this.count--;
      // 삭제된 노드(deletedNode)는 리턴해준다.
      return deletedNode;
    } else {
      // 2) 첫 번째 노드를 제외한 나머지 노드를 제거하는 상황
      // for 문드로 제거할 노드 이전 노드까지 순회한다.
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
        //for문을 마치면 currentNode는 제거할 노드(7)의 이전 노드를 가리킨다.
      }
      // 제거한 노드는 반환되어야 하므로 변수에 저장해준다.
      let deletedNode = currentNode.next;
      // 이제 제거할 노드의 이전 노드(currentNode)가 제거할 노드의 next노드(9)를 가리키게 해주겠다.
      currentNode.next = currentNode.next.next;
      // 삭제를 했으니 count를 하나 줄여주고 삭제되 노드를 리턴해준다.
      this.count--;
      return deletedNode;
    }
  }

  deleteLast() {
    //1️⃣ deleteAt 함수 호출하는데 index는 리스트의 카운터보다 1 작은 값을 넘겨준다.
    // 만약 데이터가 세 개라면 2번 인덱스가 마지막 데이터이기 때문이다.
    return this.deleteAt(this.count - 1);
  }

  // 매개변수는 읽으려는 Index를 넣어준다.
  getNodeAt(index) {
    // 읽고자 하는 인덱스가 리스트 범위를 넘어갈 때 에러를 발생시켜주겠다.
    if (index >= this.count || index < 0) {
      throw new Error("범위를 넘어갔습니다.");
    }
    // 리스트를 순회할 변수를 만들고 head와 같은 노드를 가리킨다.
    let currentNode = this.head;
    // 이제 currentNode가 해당 인덱스까지 순회한다.
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    // currentNode를 리턴해주면 끝이다.
    return currentNode;
  }
}

export { Node, LinkedList };
