const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

const texts = [
  "JavaScript Developer",
  "Front-end Developer",
  "Problem Solver",
  "Software Engineering Student",
];

let index = 0;
const title = document.getElementById("text");

function showText() {
  // muda o texto
  title.textContent = texts[index];

  // fade in
  title.style.opacity = 1;

  // espera e faz fade out
  setTimeout(() => {
    title.style.opacity = 0;
  }, 4300);

  // próximo texto
  index = (index + 1) % texts.length;
}

// loop
setInterval(showText, 5000);

// inicia na hora
showText();

window.addEventListener("scroll", function(){
  let navbar = document.querySelector('.navbar')
  navbar.classList.toggle('roll', window.scrollY > 0)
})