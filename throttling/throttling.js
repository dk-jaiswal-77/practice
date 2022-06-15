// function greet(person1, ...args){
//     // ...args is rest parameter // it collects the remaining arguments as an array
//     console.log(args);
//     console.log(arguments);
// }

// greet("ram", "sita", "laxman");

// function outerFunction(){
    //     let name = "hari";
    //     return function(){
    //         console.log(name);
    //         name = "ram";
    //         console.log(name);
    //     }
    // }
    
    // let func = outerFunction();
    
    // func();
    // func();
    // func();

document.querySelector("#clickBtn").addEventListener("click", handleClickThrottled);

function handleClick(e){
    console.log("you clicked me!");
}

var handleClickThrottled = clickThrottle(handleClick, 1000);
console.log(handleClickThrottled);

function clickThrottle(cb, limit){
    let status = true;
    return function (){
        if(status)
        {
            cb();
            status = false;
            setTimeout(() => {
                status = true;
            }, limit);
        }
    }
}