// let a =" hello index 1";
// console.log(a);
// a=" Van la index 1";
// console.log(a);
// function sum(c,d) {
//     console.log("Cong 2 số ");
//     return c+d;
// }
// console.log(sum(2,4));
// const sum1=(s,e)=>{
//     console.log("arrow function");
//     return s+e;
// };
// console.log(sum1(5,6))
// const nhan2 =(c)=>c*2;
// console.log(nhan2(6));
// Template_litteral---------------------------------
// const name ="Nguyen binh Duong";
// const str="ten toi la "+name;
// console.log(str);
// const str2=` Toi ten la : ${name}
//  oke chao mung den voi may tinh cua toi
//  `;
//  console.log(str2);

//  Thêm phân tủ vào cuối mảng-----------------------
// const arr=[1,2,3,4];
// let arr2=[...arr ,5];
// console.log(arr2);
// Destructuring----------------------------
// const person = { name:"MIndx",age:20};
// cách 1-----------
// console.log(person.n6ame);
// console.log(person.age);
// cách 2----------------
// const{name,age}=person;
// console.log(name);
// console.log(age);


function filterRange(arr, a, b) {
    
    return arr.filter(item => (a <= item && item <= b));
  }

  let arr = [5, 3, 8, 1];
  
  let filtered = filterRange(arr, 1, 4);
  console.log(filtered);
  console.log(arr);
//   bai2
function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
      let a1 = arr[i];
  
      if (a1 < a || a1 > b) {
        arr.splice(i, 1);
        i--;
      }
    }
  
  }
   filterRangeInPlace(arr,1,4);
 console.log(arr);
//  bai3
let arr3 = ["HTML", "JavaScript", "CSS"];
let copie=arr3.reverse();
console.log(copie);
// bai4
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];
let name =[john.name,pete.name,mary.name];
console.log(name);
//   bai5
 let users1=[
     john = { name: "John", surname: "Smith", id: 1 },
    pete = { name: "Pete", surname: "Hunt", id: 2 },
     mary = { name: "Mary", surname: "Key", id: 3 },
 ]
let userFullnames = users1.map(function(element){
    return (`${element.name} ${element.surname} ${element.id}`);
})

console.log(userFullnames);
// bai 6

// let arr = [ pete, john, mary ];


// bai7
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  
  let arr1 = [1, 2, 3];
  shuffle(arr1);
  console.log(arr1);
//   bai8
let john3 = { name: "John", age: 25 };
let pete3= { name: "Pete", age: 30 };
let mary3 = { name: "Mary", age: 29 };

let age1 =[john3.age,pete3.age,mary3.age];

console.log(age1);
const congTuoi=()=>{
    let sum=0;
    for (let index = 0; index < age1.length; index++) {
        
        sum += age1[index];
        
        
    }
    return sum;
}

console.log(congTuoi());
// bai 9
function unique() {
    return Array.from(new Set(strings)) 
  }
  let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
console.log(unique(strings));
// bai 10
let users5 = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
  
  let usersById = groupById(users5);