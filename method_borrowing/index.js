// console.log("javascript");

let obj = {
    name : "dhirendra", 
    role : "software engineer",
    displayName : function (greet){
        console.log(greet, this.name);
    }
};

let obj2 = {
    name : "sandeep", 
    role : "civil engineer"
};

// obj.displayName("good morning");
// obj.displayName.call(obj2, "good night");

// obj.displayName.apply(obj2, ["good", "morning"]);

let greet = obj.displayName.bind(obj2);
greet("good luck"); 