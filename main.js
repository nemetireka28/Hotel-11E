let ar=1000;
function friss(){
let szemelyek_szama=document.getElementById("szam").value;
let napok_szama=document.getElementById("nap").value;
document.getElementById("szemelyek").innerHTML=szemelyek_szama*napok_szama*ar + " Dollars";
document.getElementById("gomb").addEventListener("click", function() {
    alert("Successful reservation!");
  });
}