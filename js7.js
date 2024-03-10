/*ar=[{name:'harleen',age:18,gender:'female'},
     {name:'priya',age:3,gender:'female'},
     {name:'sanjana',age:22,gender:'male'},
     {name:'simran',age:14,gender:'male'},
     {name:'vansh',age:13,gender:'male'},
     {name:'angad',age:21,gender:'male'}]
     
     ar.forEach((ele)=>{
         if(ele.age>=18){
            console.log("can vote")
         }else{
            console .log("cannot vote")
         }
        console.log(ele.name + ele.age + ele.gender)
        //console.log(ele.age)
        //console.log(ele.gender)
     })
  students =[{name:'krishna',rollno:12,marks:65},
  {name:'ram',rollno:32,marks:56},
  {name:'zen',rollno:47,marks:98},
  {name:'chihiru',rollno:11,marks:57},
  {name:'shirayuki',rollno:2,marks:90},
  {name:'misa',rollno:62,marks:45},
  {name:'haru',rollno:4,marks:89},
  {name:'alan',rollno:12,marks:87}
  ,{name:'radhika',rollno:92,marks:6}
              ]

  students.forEach((ele)=>{
    if(ele.rollno>15&&ele.marks>60){
        console.log(ele)
    }
  }
  )

 let age=[{name:"Smith",rollNumber:31,marks:80},
 {name:"Jenny",rollNumber:15,marks:69},
{name:"John",rollNumber:16,marks:35},
 {name:"Tiger",rollNumber:7,marks:55}]
 age.map((val)=>{
    if(val.rollNumber>30){
        console.log(val.name)
    }
 })*/

//  let student4 =[
//     {name:"Smith",rollNumber:31,marks:80},
//     {name:"Jenny",rollNumber:15,marks:80},
//     {name:"John",rollNumber:16,marks:40},
//     {name:"Tiger",rollNumber:7,marks:0}
//    ];
//     let sum=0
//    student4.map((x)=>{
//     if(x.marks>60){
//          return console.log(x.marks + x.name)
//     }else{
//         x.marks+=20
//         console.log(x.marks)
//     }
//    })
//    student4.forEach((ele)=>{
//     sum=sum+ele.marks
//    })
//    console.log(sum)



// // constructor function
// function mPerson () {
//    this.name = 'John',
//    this.age = 23
// }

// // create an object
// const person = new mPerson();
// console.log(person)

//Constructer function
// function siblings(name){
//    this.myName=name
//    this.fathersName="Inderpal singh",
//    this.MothersName="Ranjeet kaur",
//    this.address="jaipur,manbagh",
//    this.petname=function(pname){
//       console.log(`my petName is ${pname}`)
//    }
// }
// let sibling1=new siblings("khushmeet")
// console.log(sibling1.myName)
// console.log(sibling1.fathersName)
// console.log(sibling1.MothersName)
// console.log(sibling1.address)
// console.log(sibling1.petname("khushi"))

// let sibling2=new siblings("harleen")
// console.log(sibling2)

// let sibling3=new siblings("angad")
//  console.log(sibling3)

//GETTER METHOD
// const student = {

//    // data property
//    firstName: 'Monica',
   
//    // accessor property(getter)
//    get getName() {
//     return this.firstName;
//    }
// };

// // accessing data property
// //console.log(student.firstName); // Monica

// // accessing getter methods
// console.log(student.getName); // Monica

// // trying to access as a method
// //console.log(student.getName()); // error


//SETTER METHOD
// const student = {
//    firstName: 'Monica',
   
//    //accessor property(setter)
//    set changeName(newName) {
//        this.firstName = newName;
//    }
// };

// console.log(student.firstName); // Monica

// // change(set) object property using a setter
// student.changeName = 'Sarah';

// console.log(student.firstName); // Sarah


//OBJECT DEFINE PROPERTY FOR USING GETTER AND SETTER BOTH

// const student = {
//    firstName: 'Monica'
// }

// // getting property
// Object.defineProperty(student, "getName", {
//    get : function () {
//        return this.firstName;
//    }
// });

// // setting property
// Object.defineProperty(student, "changeName", {
//    set : function (value) {
//        this.firstName = value;
//    }
// });

// console.log(student.firstName); // Monica

// // changing the property value
// student.changeName = 'Sarah';

// console.log(student.firstName); //SARAH


// remove the array element from outer array
let studentsData = [['Jack', 24], ['Sara', 23],];
studentsData.pop();

console.log(studentsData); // [["Jack", 24]]