'use strict';

//Array >

//1. Declaration

const arry1 = new Array();
const arry2 = [1,2];

//2. Index position

const fruits = ['사과','바나나'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[1]);
console.log(fruits[fruits.length-1]);

//3. Looping over an array
// print all fruits
console.clear();

for(let value of fruits){
    console.log(value);
}

console.clear();
// forEach
//forEach 함수는 배열에 내가 전달한 value 값마다
//내가 전달한 함수를 출력하는구나
fruits.forEach((fruits) => console.log(fruits));

// 4. Addtion, deletion, copy
// push : add an item to the end
// pop : remove an item from the end

console.clear();
fruits.push('딸기','복숭아');
fruits.forEach((fruits) => console.log(fruits));

fruits.pop();
fruits.pop();
console.log(fruits);

// unshift : add an item to the benigging
// shift : remove an item from the benigging

fruits.unshift('딸기','수박');
console.log(fruits);
fruits.shift();
console.log(fruits);

//note! shift, unshift are slower than pop, push
console.clear();
fruits.push('딸기','복숭아','레몬');
fruits.splice(1,1);
console.log(fruits);
//원하는 데이터를 지우고 추가까지 가능하다.
fruits.splice(1,1,'추가','사과');
console.log(fruits);

//combine two arrays
//시간이 들더라도 새로운 함수에 들어가서 정의된
//내용을 확인해보자.
const fruits2 = ['코코넛','키위'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf : find the index

console.clear();
console.log(fruits);
console.log(fruits.indexOf('수박'));

//includes
//수박,코코넛이 있는지 없는지 확인
// 있으면 true, 또는 false
console.log(fruits.includes('수박'));
console.log(fruits.includes('코코넛'));

//프로젝트할때 유용하다는 엘리피셜..
//lastIndexOf
//뒤에서부터 해당하는 인덱스값 리턴
console.clear();
fruits.push('사과');
console.log(fruits);
console.log(fruits.indexOf('사과'));
console.log(fruits.lastIndexOf('사과'));

