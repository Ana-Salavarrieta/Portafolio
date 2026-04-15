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

let sliderIndex = 0;
const slides0 = document.querySelectorAll(".slide");

function moveSlide(step) {
  sliderIndex += step;

  if (sliderIndex < 0) sliderIndex = slides.length - 1;
  if (sliderIndex >= slides.length) sliderIndex = 0;

  slides.forEach((s, i) => s.classList.toggle("active", i === sliderIndex));
}

setInterval(() => moveSlide(1), 5000);
