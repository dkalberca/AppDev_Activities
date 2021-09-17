var input1 = document.getElementById("userinput1");
var input2 = document.getElementById("userinput2");
var result = document.getElementById("finalresult");



document.getElementById("add").addEventListener("click",function(){
    result.value=parseInt(input1.value)+parseInt(input2.value);
})
document.getElementById("subtract").addEventListener("click",function(){
    result.value=parseInt(input1.value)-parseInt(input2.value);
})
document.getElementById("multiply").addEventListener("click",function(){
    result.value=parseInt(input1.value)*parseInt(input2.value);
})
document.getElementById("divide").addEventListener("click",function(){
    result.value=parseInt(input1.value)/parseInt(input2.value);
})

function darkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
 }