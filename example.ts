// // TODO: divide 라고 하는 함수를 만들고
// // TODO: Item 이라고 하는 커스텀 타입을 만들어서
// // TODO: 이 item의 타입에 따라, 그리고 어떤 값인지에 따라
// // TODO: 각각의 값을 구분하여 console.log()로 출력하는 함수를 만들어보세요
// // ? enum 타입 활용, switch문 활용

// enum Item {
//   BAG = 'bag',
//   GUN = 'gun',
//   BULLET = 'bullet',
// }

// const divide = (item: Item) => {
//   // TODO: switch문을 활용하여 각각의 item에 따라 다른 메세지를 출력하도록 작성하세요
//   switch (item) {
//     case Item.BAG:
//       console.log('bag');
//       break;
//     case Item.GUN:
//       console.log('gun');
//       break;
//     case Item.BULLET:
//       console.log('bullet');
//       break;
//   }
// };

// //divide(Item.BULLET);

// // TODO: SimpleUser라고 하는 객체 타입을 만들고, 필드는 name(이름), age(나이)
// // TODO: logUser라는 함수를 만들어서 SimpleUser 타입의 인자를 받고
// // TODO: name과 age를 console.log로 출력하는 함수를 만드세요
// // TODO: 최소 3명 이상의 simple 사용자를 만들어서 반복적으로 logUser 함수를 호출하도록 작성하세요

// interface SimpleUser {
//   name: string;
//   age: number;
// }

// const logUser = (user: SimpleUser) => {
//   console.log(`name: ${user.name}, age: ${user.age}`);
// };

// const users: SimpleUser[] = [
//   { name: 'userA', age: 20 },
//   { name: 'userB', age: 30 },
//   { name: 'userC', age: 40 },
//   { name: 'userD', age: 50 },
//   { name: 'userE', age: 60 },
// ];

// //users.forEach(logUser);

// // TODO: 타입스크립트 실습 문제1
// // TODO: dayjs 를 활용한 날짜 포맷 함수를 만들어야 합니다. 함수 이름은 formatDate() 로 하고
// // TODO: Date 타입의 값을 받아와서 ‘YYYY.MM.DD’ 형태로 날짜가 문자열로 포맷된 값으로 반환하게 되어야 합니다. (TS의 타입 부여가 잘 되어야 합니다.)
// // TODO: 아래 someSchedule 객체의 각 날짜를 formatDate 함수로 포맷된 값으로 변경되도록 처리한 후 log로 띄어 확인해보세요.

// import dayjs from 'dayjs';

// interface Schedule {
//   study: Date;
//   election: Date;
//   trip: Date;
// }

// const someSchedule: Schedule = {
//   study: new Date('2025-04-03'),
//   election: new Date('2025-06-03'),
//   trip: new Date('2025-08-01'),
// };

// // TODO: 날짜 포맷..
// const formatDate = (date: Date) => {
//   const day = dayjs(date);
//   return day.format('YYYY.MM.DD');
// };

// const printDate = () => {
//   const studyDate = formatDate(someSchedule.study);
//   const electionDate = formatDate(someSchedule.election);
//   const tripDate = formatDate(someSchedule.trip);

//   console.log(
//     `study: ${studyDate}\nelection: ${electionDate}\ntrip: ${tripDate}`,
//   );
// };

// // printDate();

// // TODO: 타입스크립트 실습 문제2
// // TODO: calcTotal() 라는 장바구니에 있는 상품들의 총 가격을 계산하는 함수를 만들어야 합니다.
// // TODO: 장바구니의 각 상품은 이름, 종류, 가격, 개수 4가지 값이 들어갈 수 있어야 합니다.
// // TODO: 장바구니에 담긴 각 상품 타입을 정의하고, 장바구니를 인자로 받아서
// // TODO: 총 상품 가격을 반환하는 calcTotal() 함수를 타입을 적절하게 적용해서 만들어보세요.

// // TODO: 장바구니의 각 상품 타입정의하고, cart 배열에도 타입 부여하여 상품을 3개이상 추가
// // TODO: calcTotal 함수를 만들고 실행하여 지불해야할 총 금액을 계산하여 total에 저장하여 확인
// interface ItemCart {
//   name: string;
//   type: string;
//   price: number;
//   number: number;
// }

// const cart: ItemCart[] = [
//   { name: 'apple', type: 'fruit', price: 1000, number: 4 },
//   { name: 'banana', type: 'fruit', price: 1500, number: 2 },
//   { name: 'wine', type: 'drink', price: 30000, number: 1 },
//   { name: 'coffee', type: 'drink', price: 2700, number: 3 },
// ];

// const calcTotal = (items: ItemCart[]) => {
//   let total: number = 0;
//   items.forEach((item) => {
//     total += item.price * item.number;
//   });
//   console.log('total:', total);
// };

// //calcTotal(cart);

// // TODO: 타입스크립트 실습 문제3
// // TODO: 2번 문제의 확장입니다. 장바구니 상품의 종류 타입인 Category 라는 enum을 정의하고,
// // TODO: Category.FRUIT (과일)의 경우 무료로 판매한다고 합시다.
// // TODO: 2번 문제에서 만든 코드를 적당히 수정하여 Category enum을 적용하고,
// // TODO: 최소 1개 이상의 과일을 장바구니에 추가하여 계산 결과를 확인해봅시다.

/*
enum Category {
	FRUIT: 'fruit',
}

interface Item {
	category: Category;
}

const cart = [];

const calcTotal = () => {}

const total = calcTotal(cart);
console.log('total:', total);
*/

// // TODO: 4번

// import fs from 'fs/promises';

// interface User {
//   id: string;
//   name: string;
//   age: number;
//   isAdmin: boolean;
// }

// // 사용자 정보를 JSON 파일로 저장하는 함수
// const saveUser = async (user: User) => {
//   const filePath = `./user-${user.id}.json`;
//   const data = JSON.stringify(user, null, 2); // 들여쓰기 2칸
//   await fs.writeFile(filePath, data, 'utf-8');
//   console.log(`Saved user: ${user.name} → ${filePath}`);
// };

// const main = async () => {
//   const users: User[] = [
//     { id: '1', name: 'Jaeon', age: 25, isAdmin: false },
//     { id: '2', name: 'Mina', age: 22, isAdmin: false },
//     { id: '3', name: 'AdminGuy', age: 30, isAdmin: true },
//   ];

//   for (const user of users) {
//     await saveUser(user);
//   }
// };

// main();

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetchTodos = async (): Promise<Todo[]> => {
  const url = 'https://jsonplaceholder.typicode.com/todos';
  const response = await fetch(url);
  const data = await response.json();
  return data as Todo[];
};

const main = async () => {
  const todos = await fetchTodos();
  const targetTitle = 'velit soluta adipisci molestias reiciendis harum';

  const found = todos.find((todo) => todo.title === targetTitle);

  if (found) {
    console.log('id:', found.id);
  } else {
    console.log('일치하는 title을 찾을 수 없습니다.');
  }
};

main();
