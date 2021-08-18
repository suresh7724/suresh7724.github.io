let amount =99.98;
amount=amount*2;
amount="$ " + String(amount)
console.log(amount);


var Tax_Rate=0.08;
amount=99.99;
amount=amount*2;
amount=amount+(amount * Tax_Rate);
console.log(amount);
console.log(amount.toFixed(1));

let a=42;
let b='42';


//  == operator compare value of two data types
// this is will return true
console.log(a==b);

//  === operator compare type of data of two data types
// this is will return false
console.log(a===b);

function foo()
{
    // "use strict will throw error"
    "use strict";
    c=1;
}

// foo()

function make_Adder(x)
{
    function add(y)
    {
        return y+x;
    }
    return add;
}

var PlusOne=make_Adder(1);
// console.log(PlusOne);

var foo={
    a:42
};
// this object.create creates one object inside foo function
var bar=Object.create(foo);
bar.b="hello world";

console.log(bar.a);
console.log(bar.b);



