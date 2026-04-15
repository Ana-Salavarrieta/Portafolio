// slider automático con clases
let index = 0;
const slides = document.querySelectorAll(".slide");

function mostrarSlide(i) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[i].classList.add("active");
}

function siguiente() {
  index = (index + 1) % slides.length;
  mostrarSlide(index);
}

setInterval(siguiente, 3000);
mostrarSlide(index);

// validación del formulario
function enviarFormulario() {
  const nombre = document.querySelector("input[type='text']").value.trim();
  const correo = document.querySelector("input[type='email']").value.trim();

  if (nombre === "" || correo === "") {
    alert("por favor completa los campos obligatorios ✨");
    return false;
  }

  alert("gracias por ponerte en contacto ✨");
  return false;
}

// slider con translatex

setInterval(siguiente1, 3000);
mostrarSlide1(index1);

// Slider con translateX
let index2 = 0;
const slider2 = document.querySelector(".slider-dos");

function moveSlide2(step) {
  const totalSlides = slider2.children.length;
  index2 += step;

  if (index2 < 0) index2 = totalSlides - 1;
  if (index2 >= totalSlides) index2 = 0;

  slider2.style.transform = `translateX(${-index2 * 100}%)`;
}