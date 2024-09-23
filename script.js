var sName;
var iAlter;
sName = prompt("gib deinen Namen ein: ");
iAlter = prompt("gib dein Alter ein: ");

console.log (sName); 
console.log (iAlter);

var iVorherigesAlter = iAlter - 1;
var iNaechtesAlter = iVorherigesAlter + 2;

alert("letztes Jahr warst du " + iVorherigesAlter + " Jahre alt. Nächstes Jahr bist du " + iNaechtesAlter + " Jahre alt");

var oPerson = {
  vorname: "Dieter",
  nachname: "Staudacher",
  alter: 48,
};

sName = oPerson.vorname;
console.log ("Dein Vater heißt: " + sName);
