// // function add(){
// //     let a = 2;
// //     var b = 3;
// //     console.log(b);
// // }

// // let b = 4;
// // console.log(add());

// // let a;
// // console.log(a);

// // console.log("1" != 1); // coercion allowed 
// // console.log("1" !== 1); // coercion not allowed 

// console.log(false == "");
// console.log(false === "");

// console.log(a+b);


// console.log(a);
// let a = 2;
// let b = 4;
// console.log(a);

// let myFunc = {  
//     showArgs(){ 
//      console.log(arguments); 
//     } 
//    }; 
// myFunc.showArgs(1, 2, 3, 4);

// function showArguments(){
//     console.log(arguments);
// }

// // showArguments(1,2,4,5);

// let showArguments =  () => {
//     console.log(arguments);
// }

// showArguments(1,2,3,4);

// let name = "dhirendra";


// let me = { 
//     name: "Ashutosh Verma", 
//     thisInArrow:() => { 
//     console.log("My name is " + this.name); // no 'this' binding here 
//     }, 
//     thisInRegular(){ 
//     console.log("My name is " + this.name); // 'this' binding works here 
//     } 
//    };
//    me.thisInArrow(); 
//    me.thisInRegular();

// ---------------------------------------------------------------------------->

// console.log(a);
// let a = 10;
// // let a = 30;
// var b = 20;

// const c = 30;
// console.log(window);

// ______________________---------------------------------------------------------------->

// {
//     let a = 10; 
//     console.log("inside block", a);
// }

// console.log("outside block", a);

// ------------------------------------------------------------------------>

// {
//     let i = 0;
//     console.log(i);
// }

// var i = 1;
// console.log(i);  

// {
//     let i = 1;
//     console.log(i);
// }

// --------------------------------------------------------------------->

// function Counter() {
//     var count = 0;
//     this.incrementCounter = function () {
//         count++;
//         console.log(count);
//     }

//     this.decrementCounter = function () {
//         count--;
//         console.log(count);
//     }
// }

// let counter1 = new Counter();
// counter1.incrementCounter();
// counter1.incrementCounter();
// counter1.decrementCounter();
// counter1.decrementCounter();
// counter1.decrementCounter();    


// ---------------------------------------------------------------------->

// trust issue with setTimeout()

// console.log("start");

// setTimeout(() => console.log("callback"), 3000);

// let startTime = new Date;
// startTime = startTime.getTime();
// let endTime = startTime + 7000;

// while(startTime <= endTime)
// {
//     startTime = new Date;
//     startTime = startTime.getTime();
// }

// console.log("while loop terminated!");

// ------------------------------------------------------------------------>

