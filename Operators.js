//1.Arithmetic Operators
let a=10;
let b=20;
console.log("Arithmetic Operators:");
console.log("a= ",a,"b= ", b);
let sum=a+b;
let difference=a-b;
let product=a*b;
let quotient=a/b;
let remainder=a%b;
let exponent=a**b;
console.log("Arithmetic Operators:");
console.log("Sum:",sum);
console.log("Difference:",difference);
console.log("Product:",product);
console.log("Quotient:",quotient);
console.log("Remainder:",remainder);
console.log("Exponent:",exponent);




//2.Assignment Operators
let x=10;
x+=5; //Addition Assignment(x=x+5)
x-=3;
x*=2;
x/=4;
x%=6;
console.log("Assiignment Operators:");
console.log("x after assignments:",x);
console.log("\n");




//3.Comparision Opertors
let isEqual=(a==b);
let isStrictEqual=(a==b);
let isNotEqual=(a!=b);
let isGreateThan=(a>b);
let isLessThan=(a<b);
let isGreaterThanOrEqual=(a>=b);
let isLessThanOrEqual=(a<=b);
console.log("Comaprision Operators:");
console.log("Is Equal:",isEqual);
console.log("Is StrictEqual:",isStrictEqual);
console.log("Is NotEqual:",isNotEqual);
console.log("Is GreayerThan:",isGreateThan);
console.log("Is LessThan:",isLessThan);
console.log("Is GreaterThanOrEqual:",isGreaterThanOrEqual);
console.log("Is LessThanOrEqual:",isLessThanOrEqual);




//4.Logical Operators
let andOperator=(a>0 && b>0); //logical AND
let orOpertor=(a>0 || b<0); //logical OR
let notOperator=!(a<b); //logical NOT
console.log("Logical Operators:");
console.log("AND Operator:",andOperator);
console.log("OR Operator:",orOpertor);
console.log("NOT Operator:",notOperator);




//5.Bitwise Operators
let bitwiseAnd=a&b;
let bitwiseOr=a|b;
let bitwiseXor=a^b;
let bitwiseNot=~a;
let leftShift=a<<1;
let rightShift=a>>1;
console.log("Bitwise Operators:");
console.log("Bitwise AND:",bitwiseAnd);
console.log("Bitwise OR:",bitwiseOr);
console.log("Bitwise XOR:",bitwiseXor);
console.log("Bitwise NOT:",bitwiseNot);
console.log("LeftShift:",leftShift);
console.log("RightShift:",rightShift);




//6.Ternary Operators
//It is the shorthend of "if...else" statement.It takes three operators: a condition, a value if true, a value if false.
let age=18;
let eligibility=(age>=18)? "Eligible to vote":"not eligible to vote";
console.log("Ternary Operators:");
console.log("Eligibility:",eligibility);
console.log("\n");




//7.TypeOf Operator
//The 'typeof' operator is used to determine the type of a variable or value
let variabletype=typeof a;
console.log("TypeOf Operator:");
console.log("Types of Operator 'a':",variabletype);
console.log("\n");