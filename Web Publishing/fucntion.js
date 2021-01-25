"use strict";
//Function

function printHello(){
    console.log(`Hello`);
}
printHello();

function log(message){
    console.log(message);
}
log('Good Boy');
log(1234); // 자료형이 지정되어 있지 않지만 js는 자동으로 문자열로 바꿔줌.
// 그래서 나중에는 타입스크립트를 배워라.

//2. parameter

function changeName(obj){
    obj.name = 'coder'; 
}

const host = { name:'ellie' };
changeName(host);
log(host);

// 3.default prarameter
// parameter가 정의되어있지 않으면 
// 자동으로 설정된 값이 지정됨.

function showMessgae(message, from='unknown'){
    console.log(`${message} by ${from}`);
}
showMessgae('Hi');
// 파라미터값이 지정되어있지 않으면 이젠 원하는 디폴트값을 적으면 된다.

// 4. Rest parameters 


// arow function

const simplePrint = () => console.log('simple Code!');

const add = (a ,b) => a + b;
//이걸 그냥 function으로 바꿀때
const abc = function(a,b){
    return a+b;
};

