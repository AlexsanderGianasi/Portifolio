
function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
}

window.addEventListener("scroll", function(){
  let header = document.querySelector('#header')
  if (!header) return; // evita quebrar se o elemento não existir
  header.classList.toggle('roll', window.scrollY > 0)
})

// Translate

const translations = {
  en: {
    sending: "Sending...",
    sent: "Message sent!",
    senterror: "Error sending. Try again.",
    logo: "Portifolio",
    navh: "Home",
    nava: "About",
    navp: "Portfolio",
    navs: "Services",
    navc: "Contact",
    title: "Alexsander Gianasi",
    subtitle: "I'm a",
    roles: [
      "JavaScript Developer",
      "Front-end Developer",
      "Problem Solver",
      "Software Engineering Student"
    ],
    description: "Front-end developer focused on building fast, modern, and user-centered web experiences. <br> I use JavaScript to create intuitive and high-performance interfaces that combine clean design with real usability. <br> With hands-on experience in real-world projects, including a company website, I bring practical knowledge and a constant drive to improve. <br> Currently studying Software Engineering and always pushing my skills to the next level.",
    about: "I first discovered programming during the pandemic, and even starting small, I quickly realized it was something different — something I genuinely enjoyed. <br><br> For a while, I had to step away to focus on work, but the desire to come back never left. Programming stayed in my mind as something I truly wanted for my future. <br><br> When I found out I was going to be a father, I made the decision to fully commit. I returned to studying, started a Software Engineering degree, and began focusing on building a real career in tech. <br><br> I developed and sold my first project, and that was the moment everything clicked. Turning ideas into reality — and even exceeding expectations — is what I want to do. <br><br> Today, I continue to grow as a front-end developer, always learning, improving my skills, and building better solutions every day.",
    aboutsub: "I turn ideas into real, functional experiences.",
    porttitle: "My Work",
    portsubtitle: "Some of the projects I've built, focusing on performance, usability, and real-world solutions.",
    live: "Live",
    code: "Code",
    portprojtitle: "HS Imãs",
    portdescription: "A responsive website built for a real client, focused on performance and usability.",
    servicessubtitle: "Services I offer to help build modern and efficient web experiences. <br> Focused on performance, usability, and real-world results.",
    servicefrontend: "Front-end Development",
    servicefrontenddesc: "Creating intuitive, visually appealing interfaces that provide a smooth and engaging user experience across all devices.",
    servicewebdev: "Web Development",
    servicewebdevdesc: "I build fast, scalable, and high-performance web applications focused on real-world results.",
    servicelandingpages: "Landing Pages",
    servicelandingpagesdesc: "Designing and developing conversion-focused landing pages that help turn visitors into customers.",
    serviceproblemsolving: "Problem Solving",
    serviceproblemsolvingdesc: "Strong focus on solving real-world problems through code, turning ideas into functional and reliable solutions.",
    servicesmini: "Focused on performance, clean code, and real-world results.",
    techstack: "Tech Stack",
    tools: "Tools",
    contacttitle: "Let’s Build Something Great Together",
    contactsubtitle: "I’m available for freelance projects and new opportunities.",
    contactsend: "Send Message"
  },

  pt: {
    sending: "Enviando...",
    sent: "Mensagem enviada!",
    senterror: "Erro ao enviar. Tente novamente.",
    logo: "Portifólio",
    navh: "Menu",
    nava: "Sobre",
    navp: "Portfólio",
    navs: "Serviços",
    navc: "Contato",
    title: "Alexsander Gianasi",
    subtitle: "Sou um",
    roles: [
      "Desenvolvedor JavaScript",
      "Desenvolvedor Front-end",
      "Resolvedor de Problemas",
      "Estudante de Engenharia de Software"
    ],
    description: "Desenvolvedor front-end focado na criação de paginas web, modernas e centradas no usuário. <br> Utilizo JavaScript para criar interfaces intuitivas e de alto desempenho que combinam design limpo com usabilidade real. <br> Com experiência prática em projetos reais, incluindo o website de uma empresa, trago conhecimento prático e uma busca constante por aprimoramento. <br> Atualmente, estudo Engenharia de Software e estou sempre aprimorando minhas habilidades.",
    about: "Descobri a programação durante a pandemia e, mesmo começando aos poucos, logo percebi que era algo diferente — algo que eu realmente gostava. <br><br> Por um tempo, precisei me afastar para me concentrar no trabalho, mas a vontade de voltar nunca desapareceu. A programação permaneceu em meus pensamentos como algo que eu realmente queria para o meu futuro. <br><br> Quando descobri que seria pai, decidi me dedicar totalmente. Voltei a estudar, comecei uma graduação em Engenharia de Software e comecei a me concentrar em construir uma carreira sólida na área de tecnologia. <br><br> Desenvolvi e vendi meu primeiro projeto, e foi nesse momento que tudo fez sentido. Transformar ideias em realidade — e até mesmo superar expectativas — é o que eu quero fazer. <br><br> Hoje, continuo crescendo como desenvolvedor front-end, sempre aprendendo, aprimorando minhas habilidades e criando soluções melhores a cada dia.",
    aboutsub: "Transformo ideias em experiências reais e funcionais.",
    porttitle: "Meu Trabalho",
    portsubtitle: "Alguns dos projetos que desenvolvi, com foco em performance, usabilidade e soluções do mundo real.",
    live: "Ao vivo",
    code: "Código",
    portprojtitle: "HS Imãs",
    portdescription: "Um site responsivo desenvolvido para um cliente real, com foco em performance e usabilidade.",
    servicessubtitle: "Serviços que ofereço para ajudar a construir experiências web modernas e eficientes.",
    servicefrontend: "Desenvolvimento Front-end",
    servicefrontenddesc: "Criar interfaces intuitivas e visualmente atraentes que proporcionem uma experiência de usuário fluida e envolvente em todos os dispositivos.",
    servicewebdev: "Desenvolvimento Web",
    servicewebdevdesc: "Eu desenvolvo aplicações web práticas, escaláveis ​​e de alta performance, focadas em resultados práticos.",
    servicelandingpages: "Landing Pages",
    servicelandingpagesdesc: "Criar e desenvolver landing pages focadas em conversão que ajudem a transformar visitantes em clientes.",
    serviceproblemsolving: "Resolução de Problemas",
    serviceproblemsolvingdesc: "Foco forte na resolução de problemas do mundo real através do código, transformando ideias em soluções funcionais e confiáveis.",
    servicesmini: "Focado em desempenho, código limpo e resultados práticos.",
    techstack: "Tecnologias",
    tools: "Ferramentas",
    contacttitle: "Vamos construir algo grandioso juntos.",
    contactsubtitle: "Estou disponível para projetos freelance e novas oportunidades.",
    contactsend: "Enviar mensagem"
  }
};

let currentLang = "en";
let texts = translations[currentLang].roles;
let index = 0;
let title = null;
let interval = null;

function showText() {
  if (!title) return;

  title.textContent = texts[index];
  title.style.opacity = 1;

  setTimeout(() => {
    title.style.opacity = 0;
  }, 4300);

  index = (index + 1) % texts.length;
}

function changeLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key] === undefined) return;

    if (key === "subtitle") {
      el.textContent = t[key];
    } else {
      el.innerHTML = t[key];
    }
  });

  texts = t.roles;
  index = 0;
  clearInterval(interval);

  // só chama showText se o title já foi atribuído
  if (title) {
    showText();
    interval = setInterval(showText, 5000);
  }
}

function makeFlagUS() {
  const svg = document.createElementNS("http://www.w3.org/2000/svg","svg");
  svg.setAttribute("width","28"); svg.setAttribute("height","20"); svg.setAttribute("viewBox","0 0 28 20");
  svg.style.borderRadius = "3px";
  svg.innerHTML = `
    <rect width="28" height="20" fill="#B22234"/>
    <rect y="1.54" width="28" height="1.54" fill="white"/>
    <rect y="4.61" width="28" height="1.54" fill="white"/>
    <rect y="7.69" width="28" height="1.54" fill="white"/>
    <rect y="10.77" width="28" height="1.54" fill="white"/>
    <rect y="13.85" width="28" height="1.54" fill="white"/>
    <rect y="16.92" width="28" height="1.54" fill="white"/>
    <rect width="11" height="10.77" fill="#3C3B6E"/>`;
  return svg;
}

function makeFlagBR() {
  const svg = document.createElementNS("http://www.w3.org/2000/svg","svg");
  svg.setAttribute("width","28"); svg.setAttribute("height","20"); svg.setAttribute("viewBox","0 0 28 20");
  svg.style.borderRadius = "3px";
  svg.innerHTML = `
    <rect width="28" height="20" fill="#009C3B"/>
    <polygon points="14,2 26,10 14,18 2,10" fill="#FFDF00"/>
    <circle cx="14" cy="10" r="4.2" fill="#002776"/>
    <path d="M10.2 8.5 Q14 7 17.8 8.5" stroke="white" stroke-width="0.8" fill="none"/>`;
  return svg;
}

const flagMap = { en: makeFlagUS, pt: makeFlagBR };
let dropdownOpen = false;

function renderFlags() {
  document.getElementById('selectedFlag').innerHTML = '';
  document.getElementById('selectedFlag').appendChild(flagMap[currentLang]());
  document.getElementById('flagUS').innerHTML = '';
  document.getElementById('flagUS').appendChild(makeFlagUS());
  document.getElementById('flagBR').innerHTML = '';
  document.getElementById('flagBR').appendChild(makeFlagBR());
}

function toggleDropdown() {
  dropdownOpen = !dropdownOpen;
  document.getElementById('langDropdown').classList.toggle('open', dropdownOpen);
  document.getElementById('arrow').classList.toggle('open', dropdownOpen);
}

function selectLang(lang) {
  changeLanguage(lang);
  dropdownOpen = false;
  document.getElementById('langDropdown').classList.remove('open');
  document.getElementById('arrow').classList.remove('open');
  document.getElementById('selectedFlag').innerHTML = '';
  document.getElementById('selectedFlag').appendChild(flagMap[lang]());
}

document.addEventListener('click', function(e) {
  if (!document.getElementById('langSelector').contains(e.target)) {
    dropdownOpen = false;
    document.getElementById('langDropdown').classList.remove('open');
    document.getElementById('arrow').classList.remove('open');
  }
});

document.addEventListener("DOMContentLoaded", () => {
  title = document.getElementById("text"); // ✅ atribui primeiro
  showText();                              // ✅ depois mostra o texto
  interval = setInterval(showText, 5000);  // ✅ inicia o loop
  changeLanguage("en");                    // ✅ aplica traduções
  renderFlags();                  

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(n => n.classList.remove('active'));
        const active = document.querySelector(`.nav__link[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.4 }); // 40% da seção visível já ativa o link

  sections.forEach(s => observer.observe(s));

  // Hamburger
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.querySelector('.navbar ul');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navMenu.classList.toggle('open');
  });

  // Fecha o menu ao clicar em um link
  document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navMenu.classList.remove('open');
    });
  });
});

emailjs.init("7OMytcdtO0Or0HZEn");

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const overlay = document.getElementById('form-overlay');
  const icon    = document.getElementById('overlay-icon');
  const msg     = document.getElementById('overlay-msg');
  const t       = translations[currentLang];

  // Mostra overlay de envio
  overlay.style.display = 'flex';
  requestAnimationFrame(() => overlay.classList.add('visible'));
  icon.className = 'loading';
  icon.textContent = '';
  msg.textContent = t.sending;

  emailjs.sendForm('service_rk54nfk', 'template_oa9mpf3', this)
    .then(() => {
      icon.className = 'success';
      icon.textContent = '✓';
      msg.textContent = t.sent;
      document.getElementById('contact-form').reset(); // limpa o formulário

      setTimeout(() => {
        overlay.classList.remove('visible');
        setTimeout(() => overlay.style.display = 'none', 300);
      }, 2500);
    })
    .catch(() => {
      icon.className = 'error';
      icon.textContent = '✕';
      msg.textContent = t.senterror;

      setTimeout(() => {
        overlay.classList.remove('visible');
        setTimeout(() => overlay.style.display = 'none', 300);
      }, 2500);
    });
});