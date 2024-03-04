//CALCULATOR USING IF-ELSE
/*let firstNum = 50;
let secondNum = 5;
let result;
let op = "**";
 if(op=="+"){
        result= firstNum+secondNum;
    }
    else if(op=="-"){
        result= firstNum-secondNum;
   }
   else if(op=="/"){
        result= firstNum/secondNum;
    }
    else if (op=="*"){
result= firstNum*secondNum;
   }
    else if(op=="%"){
        result=firstNum%secondNum;
    }
    else{
        console.log('operator is undefined');
    }
  console.log(result);      

//CALCULATOR USING TERANERY OPERATOR
(op=="+")? console.log(firstNum + secondNum):(op=="-")? console.log(firstNum - secondNum):(op=="/")? console.log(firstNum / secondNum):(op=="*")?console.log(firstNum * secondNum):(op=="%")? console.log(firstNum % secondNum ): console.log("not defined");
    
//PRINTING ODD NUMBERS
let n=50;

    while(n<=100){
        if(n%2==0){
            console.log(n);
        }
        else{
            console.log("odd one");
        }
        n++;
    }

    // DETERMINE LENGTH OF ARRAY
let N=["little",55,90,78,true,578];
for(let i=0;i<N.length;i++){
    console.log(N[i]);
}

//PRINT EVEN NO.IN ARRAY
var num=[23,55,66,2,11,57,12]
for(let i=0;i<num.length;i++){
  if(num[i]%2==0){
    console.log(num[i]);
  }} 

//PUSHING EVEN AND ODD IN DIFFERENT ARRAY USINR MAIN ARRAY
  var num=[3,78,65,2,5,11,7,31,98,53,50];
  console.log(num);
  let even=[];
  let odd=[];
  let prime=[];
  var c=1; 
           
for(let i=0;i<num.length;i++){
    
   if(num[i]%2==0){
        
        even.push(num[i]);
        
    }

    else{
        odd.push(num[i]);
    }
    for(let j=2;j<num[i];j++){
        if(num[i]%j==0){
            break;}
          else{  prime.push(num[i]);
    
        }
    }
}
console.log(even);
console.log(odd);
console.log(prime);

//CALCI USING FUNCTION CALL
function calci( a,b,op){

        if(op=="+") { 
                result=a+b;}
        
        else if(op=="-") { 
                result=a-b;}
        
        else if(op=="*") { 
                result=a*b;}
             
        else if(op=="/")  {
                result=a/b;}
            
        else if(op=="%") { 
                result=a%b;}
    
        else{
            console.log("operator not found");}

}
calci(23,7,"%");
console.log(result);

//USING FOR LOOP FOR LOGICAL OP
for(let i=0;i<=100;i++){
    if(i%3==0 && i%5!=0){
        console.log(i+" = fizz")
    }
    else if(i%5==0 && i%3!=0){
        console.log(i+" = buzz")

    }
    if((i%3==0)&& (i%5==0)){
        console.log(i+" = fizz buzz")
    }

}

//MULTI[LE OF 3 AND 5]
let a=100
let i=0
while(i<=a){
    if(i%3==0)
    console.log(i);
    i+=3;
}
let j=0
while(j<=a){
if(j%5==0)
console.log(j);
j+=5;
}
//MAXIMUM IN ARRAY
let arr = [2,4,89,9,67,56,87,90,99,25,22,188];
let max=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }


}console.log("maximum is :" + max);
let index= arr.indexOf(max)
arr.splice(index,1);  //REMOVE MAX IN ARRAY
console.log(arr);
arr.shift()         //LEFT SHIFT OF ARRAY ELEMENTS
console.log(arr);
arr.unshift("you")  //RIGHT SHIFT- ARGUMENT IS MUST
console.log(arr);

//PALLINDROME
 let pallindrome = (name)=>{  //arrow function
 let org=name.split("");
 console.log(org);
 let rev=org.reverse();
 console.log(rev);
 let temp= rev.join("");
 console.log(temp);
 if(name==temp){
    console.log("pallindrome");
 }
 else{
    console.log("not a pallindrome");
 }}

 pallindrome("priya");

 let number=[45,89,90,78,67,57,43,2,1,56,18];
 let temp;
 
 for( let i=0;i<number.length;i++){
for( let j=0;j<number.length;j++){
    if(number[i]<number[j])
    {temp=number[i];  //swapping
     number[i]=number[j];
     number[j]=temp;

    }
}
 }console.log(number);
 let array=[3,5,6,7,8]
 sum=0;
 array.filter((num)=>{
      return sum=sum+num;
 })
 console.log(sum);

 array.forEach((num)=>{
    sum=sum+num
 })
 console.log(sum);

 var d=array.reduce((a,b)=>{return a+b})
 console.log(d);
 //reversing the string
 let name= "rahul";
 let org=name.split("");
 let blank=[];
 org.forEach((word)=>{
 blank.unshift(word);
 })
 console.log(blank);
  let t=blank.join("");
  console.log(t);*/

  //CONCATENATION OF TWO STRING ARRAY AND CAPATALIZE THEIR FIRST LETTER
  var x=["harleen","priya","sanjana"];
  var y=["saluja","rajput","ghelotia"];
  let whname=[];
   x.forEach((ele) => {
    y.map((sur)=>{
        name= ele+" "+sur;
        return whname.unshift(name);
    })
    whname.reverse(name);
   })
   console.log(whname);


   let fullname;
   let surname ; let firstname;
   for(let i=0;i<x.length;i++){
    var name=x[i]
    firstname = name[0].toUpperCase() + name.slice(1);
   
   for(let j=0;j<y.length;j++)
{   surname=y[j];
    surname = surname[0].toUpperCase() + surname.slice(1);
    fullname = firstname+"  "+surname;
console.log(fullname);
}  
}  
   