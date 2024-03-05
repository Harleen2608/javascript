/*var arr=[[2,4,5],3,'a',[-1,-2,-4],2,'g',[6,4,8],5]
var alpha={a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,t:20,u:21,v:22,w:23,x:24,y:25,z:26}
var add=0;
var ar=arr.flat();
//console.log(ar)
ar.reduce((ele,val)=>{
    if(typeof(ele)=='string'||typeof(val)=='string'){
     add=add+alpha[ele]+alpha[val]
    }
    else{
     add=ele+val;
    }
    return add
})
console.log(add);
let n="l"
let count=0
let word="billonaire is well"
for(let i=0;i<word.length;i++){
    if(word[i]==n){
       count++
    }
}
console.log( n + "is occured " +count)

//ANAGRAM 
var a="silent"
var b="listen"
  
x=a.split('').sort().join('')
y=b.split('').sort().join('')
if(x===y){
    console.log("true")
}else{
    console.log("false")
}

 let n=123
  let rev=0
 while(n>0){
    r=n%10
    rev=(rev*10)+(r)
    n=parseInt(n/10);
 }
 console.log(rev)

//PALLINDROME 
let ni=12321
let res=0;
let temp=ni;
while(ni>0){
    a=ni%10
   res=(res*10)+a
   ni=parseInt(ni/10);               //
}
if(res==temp){
    console.log("palindrome")
}else{
    console.log("not")
}

#FIBONACCI
0,1,1,2,3,5,8,13
arr=[0,1]
function fibo(num){
    if(num<3){
        console.log("invalid")
        return
    }
    else{
        for(let i=1;i<num-1;i++){
            arr[i+1]=arr[i]+arr[i-1]
        }
    }

}
fibo(5)
console.log(arr)

 let arr=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
 let alp="aaaa"
 var word=[]
 let x=alp.split('');
 for(let i=0;i<x.length;i++){
   
        var a=arr.indexOf(x[i])
        var code=a+i+1
        word.push(arr[code])
        
 }console.log(x)

 console.log(word)
 var a="silent"
 var b="len"
 var w=a.split('')
 var x=b.split("")

 for(let i=0;i<w.length;i++){
    for(let j=0;j<x.length;j++){
        
      if(w[i]==x[j]) {
        w.splice(i,1)
      }
    
 }}console.log(w)
 let sum=0
 a = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
 for(let i=0;i<a.length;i++){
     if(a[i]>0){
       sum=sum+a[i] 
     }
 }console.log(sum)
 var ran=Math.floor((Math.random()*6)+1)
 console.log(ran)*/



 //NATURE OF ROOTS
//  
// let prompt = require("prompt")
// function priya(a,b){
//     return a+b
// }

// let a1=parseInt(prompt("enter 1"))
// let a2=prompt("enter 2")

// let name=priya(a1,a2)
// console.log(name)
// program to find the factorial of a number
function factorial(x) {

    // if number is 0
    if (x === 0) {
        return 1;
    }

    // if number is positive
    else {
        return x * factorial(x - 1);
    }
}

const num = 3;

// calling factorial() if num is non-negative
if (num > 0) {
    let result = factorial(num);
    console.log(`The factorial of ${num} is ${result}`);
}