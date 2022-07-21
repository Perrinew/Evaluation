function traiter()
{
var leTexte = document.getElementById("auCentre").innerHTML;
var termes = document.getElementById("mots").value;

leTexte = leTexte.split("<span style=\"color:red; background-color:yellow;\">").join("");
leTexte = leTexte.split("</span>").join("");

if(termes!="")
{
var expReg = new RegExp(termes, "ig");
var formeRplcmt = "<span style='color:red; background-color:yellow;'>" + termes +"</span>";

leTexte = leTexte.replace(expReg, formeRplcmt);
document.getElementById("auCentre").innerHTML = leTexte;
}
}
