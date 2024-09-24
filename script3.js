var iCurrentHour;
iCurrentHour = 9;

if(iCurrentHour >= 0 && iCurrentHour <= 6){
  alert("night");
} else if(iCurrentHour >= 7 && iCurrentHour <= 11){
  alert("morning");
} else if(iCurrentHour >= 12 && iCurrentHour <= 13){
  alert("noon");
} else if(iCurrentHour >= 14 && iCurrentHour <= 17){
  alert("afternoon");
} else if(iCurrentHour >= 18 && iCurrentHour <= 23){
  alert("evening");
}

for(var i=15; i<=20; i++){
  console.log(i);
}

var j = 95;
while(j<=100){
  console.log(j);
  j++;
}

var aLetters = ["H", "E", "L", "L", "O"];
var sResult = "";
for(j = 0; j <= aLetters.length -1; j++){ 
  sResult += aLetters[j];
}
console.log(sResult);

var oHuman = {
  firstname: "Max",
  lastname: "Mustermann",
  age: 21,
  introduceToWorld: function(){
    console.log("Hello my name is " + this.firstname + " " + this.lastname);
  }
}

oHuman.introduceToWorld();
