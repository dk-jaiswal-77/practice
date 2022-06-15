// console.log("arrow function");

// let printNameArrow = (name) => {
//     console.log(this);
// }

// printNameArrow();

let camera = {
    price : 6000, 
    myDesArrow : () => {
        console.log("arrow", this.price);
        // in arrow function, "this" keyword is redefined! 
    }, 
    myDesFunction : function () {
        console.log("function", this.price);
    }
}

camera.myDesArrow();
camera.myDesFunction();