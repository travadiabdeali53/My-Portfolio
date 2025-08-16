function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Toggle hamburger menu
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");

  // Animate slide + fade
  if (menu.classList.contains("open")) {
    menu.style.maxHeight = menu.scrollHeight + "px";
    menu.style.opacity = "1";
    menu.style.transform = "translateY(0)";
  } else {
    menu.style.maxHeight = "0";
    menu.style.opacity = "0";
    menu.style.transform = "translateY(-20px)";
  }
}

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Fade-in effect when sections appear
const sections = document.querySelectorAll("section");

const options = {
  threshold: 0.2
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target);
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});

// Typewriter effect for job title
const text = "Python Developer";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.querySelector(".section__text__p2").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
document.querySelector(".section__text__p2").innerHTML = "";
window.onload = typeWriter;


// Floating animation for profile picture
window.addEventListener("load", () => {
  const profilePic = document.querySelector(".section__pic-container img");

  if (profilePic) {
    profilePic.animate(
      [
        { transform: "translateY(0px)" },
        { transform: "translateY(-15px)" },
        { transform: "translateY(0px)" }
      ],
      {
        duration: 4000,
        iterations: Infinity,
        easing: "ease-in-out"
      }
    );
  }
});


// Bounce animation when hovering social icons
const icons = document.querySelectorAll("#socials-container .icon");

icons.forEach(icon => {
  icon.addEventListener("mouseenter", () => {
    icon.animate([
      { transform: "scale(1)" },
      { transform: "scale(1.2)" },
      { transform: "scale(1)" }
    ], {
      duration: 400,
      iterations: 1
    });
  });
});

// Create a progress bar at top of page
const progressBar = document.createElement("div");
progressBar.style.height = "5px";
progressBar.style.width = "0";
progressBar.style.position = "fixed";
progressBar.style.top = "0";
progressBar.style.left = "0";
progressBar.style.background = "skyblue";
progressBar.style.zIndex = "1000";
document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;
  let docHeight = document.documentElement.scrollHeight - window.innerHeight;
  let progress = (scrollTop / docHeight) * 100;
  progressBar.style.width = progress + "%";
});
