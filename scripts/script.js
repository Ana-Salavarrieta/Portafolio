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

function moveSlide(step) {
  const slider = document.getElementById("slider");
  if (!slider) return;

  const totalSlides = slider.children.length;
  sliderIndex += step;

  if (sliderIndex < 0) sliderIndex = totalSlides - 1;
  if (sliderIndex >= totalSlides) sliderIndex = 0;

  slider.style.transform = `translateX(${-sliderIndex * 100}%)`;
}

const sliderElement = document.getElementById("slider");
if (sliderElement) {
  sliderElement.style.transition = "transform 0.5s ease";
  setInterval(() => moveSlide(1), 5000);
}
