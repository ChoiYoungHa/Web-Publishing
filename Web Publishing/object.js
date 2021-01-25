
const name = 'ellie';
const age = 4;

const obj1 = {};
const obj2 = new Object();

function print(person){
    console.log(person.name);
    console.log(person.age);
}
// 오브젝트는 키와 벨류의 집합체이다.
const ellie = {name : 'ellie', age : 4};
print(ellie);

ellie.hasJob = true;
console.log(ellie.hasJob);

delete ellie.hasJob;
console.log(ellie.hasJob);

//2. Computed properties
console.log(ellie.name);
//배열에서 값을 받아오는것처럼 접근 가능
//대신 반드시 '' String 타입으로 !
//코딩할땐 obeject. 을쓰는게 맞고
//실시간으로 원하는값을 가져올때
//프로퍼티값을 사용한다.

console.log(ellie['name']);
ellie['hasJob'] = true;
console.log(ellie.hasJob);

//사용자가 키를 줘야 정의되는데 .은 분명히
//정의를해줬는데 못찾음. 그래서['']를 사용

function printVlaue(obj, key){
    console.log(obj[key]);
}
printVlaue(ellie,'name');
printVlaue(ellie,'age');

// 3. Property value shorthand

const person1 = { name: "bob" , age : 2};
const person2 = { name: "steve" , age : 3};
const person3 = { name: "dev" , age : 22};
const person4 = makePerson('youngha',20);

function makePerson(name, age){
    return{
        name,
        age
    };
}
//4. Constructor Function
console.log(person4);
function Person(name, age){
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

// 6. for.. in vs for..of
console.clear();
for(key in ellie){
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 3, 4, 5];
for(value of array){
    console.log(value);
}

//밑에껀 평범한 for문 
//for(let i=0; i<array.length ; i++){
  //  console.log(array[i]);
//}

// Fun cloning

const user = {name: 'ellie', age: '20'};
const user2 = user;

// 포인터 개념이 적용
user2.name = 'youngha';
console.log(user.name);

// 이런 포인트 말고 진짜로 오브젝트를 
//복사할순없나?
// old way
const user3 = {};
for(key in user){
    user3[key] = user[key];
}
console.clear();
console.log(user3);

// another way
// Object.assign(dest, [obj1, obj2, obj3...])

const user4 = {};
//Object.assign(복사당할obj, 복사할obj)
Object.assign(user4, user);
console.log(user4);

//같은 프로퍼티일경우 값이 계속 덮어씌어진다.
const fruit1 = {color : 'red'};
const fruit2 = {color : 'blue', size:'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
