var myName=prompt("Adınız:")
let name=document.querySelector("#myName")
name.innerHTML=myName






var today= new Date()
var h= today.getHours()
if(h<10){
    h= "0" + h
}
var m= today.getMinutes()
if(s<10){
    m= "0" + m
}
var s= today.getSeconds()
if(s<10){
    s= "0" + s
}
var d= today.getDay()
var gunler=["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]


function showTime(){
    let clock=document.querySelector("#myClock")
    clock.innerHTML=h+":"+m+":"+s+" "+gunler[d];
}

setTimeout(showTime,0)
