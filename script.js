const toggleMenuBtn = document.getElementById("mobile-menu-open");
const mobileMenu = document.getElementById("mobile-menu");
const backdrop = document.getElementById("backdrop");
const homeBtn = document.getElementById("mobile-home-btn");
const aboutBtn = document.getElementById("mobile-about-btn");
const contactBtn = document.getElementById("mobile-contact-btn");
const blogBtn = document.getElementById("mobile-blog-btn");
const careersBtn = document.getElementById("mobile-careers-btn");
const barTop = document.getElementById("bar-top");
const barMid = document.getElementById("bar-mid");
const barBottom = document.getElementById("bar-bottom");

const openMenuAnimation = () => {
  barTop.style.transform = "rotate(45deg) translateY(8px)";
  barBottom.style.transform = "rotate(-45deg) translateY(-8px)";
  barMid.style.width = "0";
  barMid.style.transform = "translateX(-5px)";
};

const closeMenuAnimation = () => {
  barMid.style.transform = "translateX(0)";
  barMid.style.width = "1.5rem";
  barBottom.style.transform = "rotate(0) translateY(0)";
  barTop.style.transform = "rotate(0) translateY(0)";
};

toggleMenuBtn.addEventListener("click", () => {
  if (mobileMenu.style.display != "flex") {
    openMenuAnimation();
    mobileMenu.style.display = "flex";
    backdrop.style.display = "block";
  } else {
    closeMenuAnimation();
    mobileMenu.style.display = "none";
    backdrop.style.display = "none";
  }
});

backdrop.addEventListener("click", () => {
  mobileMenu.style.display = "none";
  backdrop.style.display = "none";
  closeMenuAnimation();
});

homeBtn.addEventListener("click", () => {
  mobileMenu.style.display = "none";
  backdrop.style.display = "none";
  closeMenuAnimation();
});

aboutBtn.addEventListener("click", () => {
  mobileMenu.style.display = "none";
  backdrop.style.display = "none";
  closeMenuAnimation();
});

contactBtn.addEventListener("click", () => {
  mobileMenu.style.display = "none";
  backdrop.style.display = "none";
  closeMenuAnimation();
});

blogBtn.addEventListener("click", () => {
  mobileMenu.style.display = "none";
  backdrop.style.display = "none";
  closeMenuAnimation();
});

careersBtn.addEventListener("click", () => {
  mobileMenu.style.display = "none";
  backdrop.style.display = "none";
  closeMenuAnimation();
});
