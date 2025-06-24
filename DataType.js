//Primitive Datatypes
let number=80; //Number
let string="Deepthi"; //string
let boolean=true; //Boolean
let undefinedvar; //Undefined(not assigned a value)
let nullvar= null; //Null
let SymbolVar=Symbol("unique"); //Symbol(unique identifier often used as object property keys)
let bigIntVar=BigInt(12345678901234567890); //bigInt(used for larger integers)
let objectVar={key:"value"}; //object(collection of key-value paira)
let arrayVar=[1,2,3,4,5]; //
let functionVar= function() {return "Iam a function"};
let object2={
    //adding multiple key-value pairs
    name: "Deepthi",
    age: 19,
    isEmployed: false,
    hobbies: ["drawing", "listening music", "watching-movies"],
}
console.log("Number:",number);
console.log("String:",string);
console.log("Boolean:",boolean);
console.log("Undefined:",undefinedvar);
console.log("Null:",nullvar);
console.log("Symbol:" ,SymbolVar);
console.log("BigInt:",bigIntVar);
console.log("Object:",objectVar);
console.log("Array:"+arrayVar);
console.log("Function:",functionVar());
console.log("object:",object2);