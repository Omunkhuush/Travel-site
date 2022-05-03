import "../styles/styles.css";
import MobileMenu from "./modules/mobile-menu";
import RevealOnScroll from "./modules/RevealOnScroll";
if (module.hot) {
  module.hot.accept();
}
let mobileMenu = new MobileMenu();
new RevealOnScroll(document.querySelectorAll(".feature-item"), 85);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60);
