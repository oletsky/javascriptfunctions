"use strict";
function f1() {
    return 10;
}
function f2() {
    return 20;
}

function foo(f) {
    return f();
}

console.log (foo(f2));