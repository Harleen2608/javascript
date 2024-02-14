
console.log(":kjj")
var flag=0;
 var a=document.getElementById("bulb")
 var btn = document.querySelector("button")
 btn.addEventListener("click",function(){
    if(flag==0){
     a.style.backgroundColor="salmon";
     console.log("clicked")
     flag=1
    }else{
        a.style.backgroundColor="transparent";
        console.log("again clicked")
        flag=0
    }
})
