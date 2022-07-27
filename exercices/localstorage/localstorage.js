var tableau = ["Malia", "Raven", "Darryl", "Maggie", "Lillith"]

if (typeof(Storage)!== "undefined") {
    localStorage.setItem("tableau", tableau);
    document.getElementById("resultat").innerHTML = localStorage.getItem("tableau");

}
else {
    document.getElementById("resultat").innerHTML = "Désolé vous n'avez pas de support de stockage local..."
    
}