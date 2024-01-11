//1)
//დაწერეთ პატარა ბიოგრაფია თქვენს შესახებ და მაქსიმალურად ჩაშალეთ ცვლადებად და console-ში უნდა მივიღო სრული ტექსტი
//მაგალითად უნდა შეიცავდეს ინფორმაციას(firstName, lastName, age, job, skills,address) გამოიყენეთ template literal მიდგომა

//answer:
let firstName="guja";
let lastName="kupreishvili";
let age= 20;
let job="looking forward to"
let skills="html css ltljs";
let address="kutaisi";
console.log(`my name is ${firstName} lastname${lastName} i am ${age} years old  i am ${job} work now my  skills is ${skills} and my address ${address}`)

//2)
//დაწერეთ პროგრამა, რომელიც იყენებს ლოგიკურ ოპერატორებს (&&, ||, ! ===)
//იმის დასადგენად, არის თუ არა მოცემული წელი 2023 ან უკვე 2024; რამენაირად გამოთვალეთ და დაწერეთ ლოგიკა
// ყველა ინფივიდულაურად დაწერეს წესით!!
//answer:
let lastyear =2023;
let thisyear=2024;
 let first= lastyear<thisyear||thisyear>lastyear;
 let second=!(thisyear<lastyear);
 let third=lastyear<thisyear&&thisyear>lastyear;
 console.log(first);
 console.log(second);
 console.log(third);


//3)ააწყვეთ პატარა counter ლოგიკა სადაც გამოიყენებთ მაგალითად let x = 10; x++, x-- რომლის მიხედვითაც increment ერთ
// console-ში მეორე console-ში კი decrement!!
let x=10;
let g=x++;
console.log(g);
x--;
console.log(x);


//4)
let a = 10;
let b = 12;
let andOperator = a < 9 && b >= 11; //result false> : 
let orOperator = a > 11  || b < 10; //result false> :
let notOperator = !(a > 10); //result true> :