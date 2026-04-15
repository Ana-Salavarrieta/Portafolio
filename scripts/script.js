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

setInterval(siguiente, 3000); // cambia cada 3 segundos

mostrarSlide(index);