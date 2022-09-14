// 이중 연결리스트 import
import { DoublyLinkedList } from "../Queue/DoublyLinkedList.mjs";

// 해시 테이블의 데이터를 표현하는 클래스 생성

class HashData {
  constructor(key, value) {
    this.key = key;
    this.vale = value;
  }
}

class HashTable {
  constructor() {
    this.arr = [];
    // 배열의 0부터 9번 인덱스 순회
    for (let i = 0; i < 10; i++) {
      // 인덱스마다 빈 연결리스트 생성
      this.arr[i] = new DoublyLinkedList();
    }
  }
  // 해시함수 생성
  hashFunction(number) {
    return number % 10;
  }

  // 데이터 삽입 set
  set(key, value) {
    this.arr[this.hashFunction(key)].insertAt(0, new HashData(key, value));
  }

  get(key) {
    let currentNode = this.arr[this.hashFunction(key)].head;
    while (currentNode != null) {
      if (currentNode.data.key == key) {
        return currentNode.data.value;
      }
      currentNode = currentNode.next;
    }
    return null;
  }
  remove(key) {
    let list = this.arr[this.hashFunction(key)];
    let currentNode = list.head;
    let deletedIndex = 0;
    while (currentNode != null) {
      if (currentNode.data.key == key) {
        return list.deleteAt(deletedIndex);
      }
      currentNode = currentNode.next;
      deletedIndex++;
    }
    return null;
  }
}

export { HashTable };
