"use strict";

function callCounter() {
    var numberOfCalls=0;
    return function() {return ++numberOfCalls;};
}
let cnt=callCounter();
console.log(cnt()); //1
console.log(cnt()); //2
