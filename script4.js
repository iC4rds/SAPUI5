//debugger;

function testFunction(message){
  console.log(this);
  console.log("sagt: " + message);
}

//testFunction("Hallo Welt");

var getName = function(){
  var sResult = "Max Mustermann";
  return sResult;
}

var fnText = function(){
  var sText = "Hallo!";
}

var hauptfunktion = function(){
  var iZahl;

  var unterfunktion1 = function(){
    iZahl = 10;
  }
  unterfunktion1();
  console.log(iZahl);

  var unterfunktion2 = function(){
    iZahl = 20;
  }
  unterfunktion2();
  console.log(iZahl);

  var unterfunktion3 = function(){
    iZahl = 30;
  }
  unterfunktion3();
  console.log(iZahl);
  
  iZahl = 40;
  console.log(iZahl);
}

hauptfunktion();
