const contenido = document.querySelector(".contenido");

contenido.addEventListener("click", () => {
  alert("¡Has hecho clic en el contenido!");
});

contenido.addEventListener("focusin", () => {
  console.log("El contenido ha recibido el foco");
});

contenido.addEventListener("focusout", () => {
  console.log("El contenido ha perdido el foco");
});

contenido.addEventListener("mouseover", () => {
  console.log("El cursor ha entrado en el contenido");
});

contenido.addEventListener("mouseout", () => {
  console.log("El cursor ha salido del contenido");
});

// Aquí se puede agregar más código para el contenido dinámico

