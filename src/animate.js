// Animação do contorno
gsap.to("text", {
  strokeDashoffset: 0,
  duration: 0.3,
  ease: "power2.inOut",
 
});

setTimeout(function () {
  const startAnimation = document.querySelector(".start-animation");
  startAnimation.style.transition = "opacity 1s ease-out";
  startAnimation.style.opacity = 0;
}, 300); // Tempo igual à duração da animação do contorno

setTimeout(function () {
  document.querySelector(".start-animation").style.display = "none"; // Esconde a animação
  document.querySelector(".container-home").style.display = "flex";
  document.querySelector("footer").style.display = "flex"; // Reexibe o footer
  document.querySelector("header").style.display = "flex"; // Reexibe o footer

  document.querySelector(".container-home").style.opacity = 1;
}, 3000);
