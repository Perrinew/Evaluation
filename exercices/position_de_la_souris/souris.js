const box = document.querySelector("HTML"); // on reprend la page
const pageX = document.getElementById("x"); // ce qui concerne la position X (verticale)
const pageY = document.getElementById("y");// ce qui concerne la position Y (horizontale)

function updateDisplay(event) {
  pageX.innerText = event.pageX; //position de la souris sur la verticale
  pageY.innerText = event.pageY; //position de la souris sur l'horizontale
}

box.addEventListener("mousemove", updateDisplay, false); 
box.addEventListener("mouseenter", updateDisplay, false);
box.addEventListener("mouseleave", updateDisplay, false);
