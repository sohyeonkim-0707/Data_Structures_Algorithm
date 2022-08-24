// stack import
import { Stack } from "../Stack/stack.mjs";

// Stack 인스턴스화
let stack = new Stack();

console.log("=== 첫 번째 출력 ===");
// 스택에 데이터 네 번 push
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4); // 4가 스택의 맨 꼭대기

// pop을 통해 4부터 출력되는지 확인해보자.
console.log(stack.pop().data);
console.log(stack.pop().data);
console.log(stack.pop().data);
console.log(stack.pop().data);

// peek() 함수와 isEmpty() 함수의 테스트 코드 작성
console.log("=== 두 번째 출력 ===");
// 현재 스택은 비어있기 때문에 네 번 삽입
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
// peek()함수로 top에 있는 데이터 확인
// peek()함수로 호출했더라도 스택에서는 데이터는 제거되지 않는다.
console.log(stack.peek().data);

// top에 있던 4를 pop()함수로 제거
stack.pop();
// 다시 peek()함수로 3이 출력되는지 확인
console.log(stack.peek().data);

// 이제 isEmpty() 함수로 스택이 비었는지 확인
// 1부터 3까지 세 개의 노드가 있기 때문에 false가 출력된다.
console.log(`isEmpty: ${stack.isEmpty()}`);

//pop() 함수를 세 번 호출해서 스택을 비워준다.
stack.pop();
stack.pop();
stack.pop();

// 다시 isEmpty() 함수로 스택이 비었는지 확인
console.log(`isEmpty: ${stack.isEmpty()}`);
// pop() 함수로 데이터를 전부 제거했기 때문에 true 출력

// 빈 스택을 pop 해보기
// 이는 pop()함수의 예외처리가 잘 됐는지 확인하기 위한 것
// 빈 스택을 pop하면 에러가 아니라 null이 출력
console.log(stack.pop());
