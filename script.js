// console.log("hello world");
// var a = 57; //for var reintialization is possible GLOBAL SCOPE
// console.log(a);
// let b = 20; // for let no reintialization BLOCK SCOPE
// console.log(b)
// const c  = 30; // for const no reintialize BLOCK SCOPE
// //LET AND CONST ARE EX6 features


// console.log(c);
// var s = 10;
// var str = "Mehatab"; // ''//``
// var bool = true;
// var un;
// var nu = null;
// console.log(s);
// console.log(str);
// console.log(bool);
// console.log(un);
// console.log(nu);
// var big = 1234567780n;
// var symbol = Symbol("li");
// console.log(typeof str);
// console.log(typeof s);
// console.log(typeof bool);
// console.log(typeof un);
// console.log(typeof nu);
// console.log(typeof big);
// console.log(typeof symbol);

// //ARTHEMETIC (OPERATOR) (+,-,*,/,%) 
// var a = 10;
// var b = 20;
// var c = "30";
// console.log(a+b+c);
// console.log(a-b-c);
// console.log(a*b*c);
// console.log(a/b/c);
// console.log(a%b%c);
// //Relational operators (>,<,>=,<=,==,!=,===,!==)
// console.log(a>b>c);
// console.log(a<b<c);
// console.log(a>=b>=c);
// console.log(a<=b<=c);
// console.log(a==b==c);
// console.log(a!=b!=c);
// console.log(a===b===c);
// console.log(a!==b!==c);

// // LOGICAL OPERATORS (&&,||,!)
// console.log(a&&b&&c);
// console.log(a||b||c);
// console.log(!c);

// // ARRAY
// var arr = [10,20,30,40,50];
// console.log(arr);
// console.log(typeof arr);
// var obj = {name :"a",age:20};
// console.log(obj);
// console.log(typeof obj);
//LOOPING STATEMENTS(INTIALIZATION;CONDITION;INC/DEC)
//for loop
// for(let i=0;i<=10;i++){
//     console.log(i);
    
// }
// //while loop
// let i = 1;
// while(i<=10){
//     console.log(i);
//     i++;
    
// }
// //do while loop
// i = 1;
// do{
//     console.log('do..while');

    
// }while(i===0);

// for (let i=1;i<=10;i++){
//     if(i%2==0){
//         console.log(i);
        
//     }
//     }
// i = 10
// if(i%2===0) console.log("even");
// else console.log("odd");
// let m  = 90;
// if (m>=90) console.log("o grade");
// else if(m>=75) console.log("A grade");
// else if(m>=70) console.log("B grade");
// else console.log("Fail");
// let day = 6;
// switch(day){
//     case 1: {
//         console.log("sunday");
//         break;
//     }

//     case 2: {
//         console.log("monday");
//         break;
//     }
//     case 3: {
//         console.log("tuesday");
//         break;
//     }
//     case 4: {
//         console.log("wednesday");
//         break;
//     }

//     case 5: {
//         console.log("thursday");
//         break;
//     }
//     case 6:{

//      console.log("friday");
//      break;
//     }
//     case 7: {console.log("saturday");
//          break;
//     }
//     default : {
//         console.log("invalid");
//         break;
//     }
    

    
// }
// //ternanry operator 
// i = 7;
// let res = (i%2==0)?"even":"odd";
// marks = 90;
// let gra = (marks>=90)?"o grade":"A grade";
// console.log(res);
// console.log(gra);
// function add(){
//     console.log(10+40);
    
// }
// add();  
// //ARROW FUNCTION
// var add = (a,b)=>{
//     console.log(a+b);
    
// }
// add();
// add(10,20);
// var c;
// function add(a,b){;
//     c =10
//     console.log(a+b+c);
    
// }
// add(10,20)
// //hosting
// var z;
// console.log(z);
// //spread operator
// var arr1 = [10,20,30];
// var arr2 = [...arr1,40,50,60];//3 dots are called spread operator
// console.log(arr2);
// //destructuring operator
// var [m1,m2,m3,m4,m5] = [89,90,99,96,87];
// console.log(m1);
// console.log(m2);
// console.log(m3);
// console.log(m4);
// console.log(m5); 
//   var {name,age,dept}= {
//     name:'meha',
//     age:20,
//     dept:['csd','ece'],
//     marks : {
//         mern:90,
//         java:89,
//         c:80
//     }
//   }
//   console.log(name);
//   console.log(age);
//   console.log(dept);
//   console.log(marks);
//FOR IN LOOP
// let arr = [10,20,30,40];
// for (let i in arr){
//     console.log(i,arr[i]);
// }
// var obj = {
//     name : 'meha',
//     age : 20
// }
// for(let i in obj){
//     console.log(i,obj[i]);
    

// }
// // For of
// //for(variable variable_name of array_name)
// for (let val of arr){
//     console.log(val);
    

//MAP
// let arr = [10,20,30,40];

// var doubled_arr = arr.map((i)=>((i*2)));
// console.log(doubled_arr);
// let arr = [1,2,3,4]
// var even = arr.filter((i)=>(i%2==0))
// console.log(even);
// var total = arr.reduce((sum ,i)=>(sum+i),0);
// // console.log(total);
// let arr = [1,2,3,4]
// var doubled_arr = arr.map((i)=>(i*2));
// console.log(doubled_arr);
// var even = doubled_arr.filter((i)=>(i%2==0))
// console.log(even);
// var tot = doubled_arr.reduce((sum,i)=>(sum+i),0);
// console.log(tot);
// tot_sum = arr.map((num)=>num*2).filter((num)=>(num%2==0)).reduce(sum,num)=>(sum+num)
// var n = 7;
// var flag = true;
// if(n<=1) {
//     flag = false;
// }
// else{
//     for(let i = 2;i<n/2;i++){
//         if(n%i==0){
//             flag = false;
//             break;
//         }
//     }
// }
// console.log(flag?"prime":"not prime");
// var add = (a,b,callback)=>{
//     var result = a+b;
//     callback(result);
// }
// add(10,20,(res)=>{console.log(res)})
// var main=(callback)=>{
//     console.log("I am main");
//     callback()
    
// }
// var demo =()=>{
// //     console.log("I am Call back");
    
// // }
// // main(demo)
// var  demo = ()=>{
//     console.log("I am callback");
    
// }
// var main = (myFunction)=>{
//     myFunction()
// }
// main(demo);
// PROMISE


// var promise = new Promise((resolve,reject)=>{
//     var success = true;
//     if(success){
//         setTimeout(()=>{
//             resolve("promise resolved");

//         },5000)
        
//     }
//     else{
//         reject("promise rejected");
//     }
// })
// promise.then((res)=>console.log(res))
// .catch((err)=>console.log(err))

// // PROMISE


// var promise = new Promise((resolve,reject)=>{
//     var success = true;
//     if(success){
//         resolve("promise resolved");
//     }
//     else{
//         reject("promise rejected");
//     }
// })
// promise.then((res)=>console.log(res))
// .catch((err)=>console.log(err))
// getting json files

// const getData =()=>{
//     return fetch( 'https://jsonplaceholder.typicode.com/posts')
// }
// getData().then((res)=>res.json())
// .then((data)=>console.log(data))
// .catch(err=>console.log(err))

// const getData = async ()=>{
//     try{
//     var res = await fetch('https://jsonplaceholder.typicode.com/posts')
//     var data = await res.json();
//     console.log(data);
    
//     }catch(err){
//         console.log(err);
        
//     }
// }
// getData();





  
  
  










