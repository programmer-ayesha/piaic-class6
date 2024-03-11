"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var service_1 = require("./service");
var hello_1 = require("./hello");
var hello_2 = require("./hello");
console.log(hello_2.default);
console.log(service_1.f);
console.log(hello_1.default);
// a = 1000;// update nhi krsakte   error
console.log(service_1.a);
// documentation
//there are two type of export variable se phele export laga dain file ke sab se last me ao export {}
//ek file 5 chizon ko export kia hai 
//expot default her file se ek hi cheez hoti hai
//developer pakage bana kr npm pe bublish krdete hai
//ap ka project kuch pakages 
//jese hum apne package ko install krte hain utna apne version ko update kr te hain
//name pakage .json me ae ga aue code 
//jab hum ne inquirer installkiy mm
// dev depedencies me type a jaen gi
//development kr liye jo pakages hote hain type script development kr liye use krte hain take error pata chal jae
