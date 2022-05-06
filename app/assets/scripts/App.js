import "../styles/styles.css";
import "lazysizes";
import MobileMenu from "./modules/mobile-menu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";
import ClientArea from "./modules/ClientArea";
//import Modal from "./modules/modal";

if (module.hot) {
  module.hot.accept();
}
//------------------------------------//
new ClientArea();

let mobileMenu = new MobileMenu();
// -------- reveal scroll ------//
new RevealOnScroll(document.querySelectorAll(".feature-item"), 85);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60);

// ---- Sticky Header ----------//
let stickyHeader = new StickyHeader();
//---------Modal -------------//
//new Modal();

// webpack split modal --------//
let modal;
document.querySelectorAll(".open-modal").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    if (typeof modal == "undefined") {
      import(/*webpackChunkName: "modal"*/ "./modules/modal")
        .then((x) => {
          modal = new x.default();
          setTimeout(() => modal.openModal(), 20);
        })
        .catch(() => console.log("file import error"));
    } else {
      modal.openModal();
    }
  });
});
