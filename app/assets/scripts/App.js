import "../styles/styles.css";
import MobileMenu from "./modules/mobile-menu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";

if (module.hot) {
  module.hot.accept();
}
let mobileMenu = new MobileMenu();
// -------- reveal scroll ------//
new RevealOnScroll(document.querySelectorAll(".feature-item"), 85);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60);

// ---- Sticky Header ----------//
let stickyHeader = new StickyHeader();
