"use strict";(self.webpackChunktravel_site=self.webpackChunktravel_site||[]).push([[582],{258:(e,s,n)=>{function i(e,s){for(var n=0;n<s.length;n++){var i=s[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}n.r(s),n.d(s,{default:()=>a});const a=function(){function e(){!function(e,s){if(!(e instanceof s))throw new TypeError("Cannot call a class as a function")}(this,e),this.injectHTML(),this.modal=document.querySelector(".modal"),this.clsBtn=document.querySelector(".modal__close"),this.events()}var s,n;return s=e,(n=[{key:"events",value:function(){var e=this;this.clsBtn.addEventListener("click",(function(){return e.closeModal()})),document.addEventListener("keyup",(function(s){return e.keyPressHandler(s)}))}},{key:"keyPressHandler",value:function(e){27==e.keyCode&&this.closeModal()}},{key:"openModal",value:function(){this.modal.classList.add("modal--is-visible")}},{key:"closeModal",value:function(){this.modal.classList.remove("modal--is-visible")}},{key:"injectHTML",value:function(){document.body.insertAdjacentHTML("beforeend",'\n        <div class="modal">\n        <div class="modal__inner">\n        <h2 class="section-title section-title--blue section-title--less-margin"><img src="assets/images/icons/mail.svg" class="section-title__icon"> Хамт <strong>Аялах</strong></h2>\n        <div class="wrapper wrapper--narrow">\n            <p class="modal__description">Бид тун удахгүй онлайнаар захиалга өгөх системийг нээх бөгөөд, та одоогоор доорхи сошиал платформуудаар дамжиуулж бидэнтэй холбогдох боломжтой!</p>\n        </div>\n\n        <div class="social-icons">\n            <a href="#" class="social-icons__icon"><img src="assets/images/icons/facebook.svg" alt="Facebook"></a>\n            <a href="#" class="social-icons__icon"><img src="assets/images/icons/twitter.svg" alt="Twitter"></a>\n            <a href="#" class="social-icons__icon"><img src="assets/images/icons/instagram.svg" alt="Instagram"></a>\n            <a href="#" class="social-icons__icon"><img src="assets/images/icons/youtube.svg" alt="YouTube"></a>\n        </div>\n        </div>\n        <div class="modal__close">X</div>\n        </div>\n')}}])&&i(s.prototype,n),Object.defineProperty(s,"prototype",{writable:!1}),e}()}}]);