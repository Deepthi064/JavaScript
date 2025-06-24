//CONTROL FLOW STATEMENTS
let age=18;
if(age<18){
    console.log("you are a minor.");
}
else if(age>=18 && age<65){
    console.log("you are an adult.");
}
else{
    console.log("you are a major.");
}


//SWITCH CASE STATEMENT
let day=3;
switch (day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("invalid day");
}




//WHILE Loop
let j=0;
while (j<5){
    console.log("while loop iteration:",j);
    j++;
}



//FOR Loop
console.log("\n");
for(let  i=0;i<5;i++){
    console.log("Iteration:",i);
}
console.log("\n");