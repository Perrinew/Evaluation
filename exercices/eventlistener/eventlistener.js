
    document.getElementById("monbouton").addEventListener("click", clickez)
    
    
    function clickez() {
    nom = document.getElementById("nom").value;
    prenom = document.getElementById("prenom").value;

    document.getElementById("deux").value=(`je m'appelle ${nom} ${prenom}`);
    document.getElementById("date").innerHTML = Date();

}
