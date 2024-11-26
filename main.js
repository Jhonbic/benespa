const nav = document.querySelector("#menu");
const abrir = document.querySelector("#abrir__menu");
const cerrar= document.querySelector("#cerrar__menu");
const cerrarfoot = document.querySelector("#footer__close");
const textfoot = document.querySelector("#footer__info__text");
const abrirfoot = document.querySelector("#footer__info__btn");
const body = document.querySelector("#cuerpo");

abrir.addEventListener('click', () =>{
    nav.classList.add("nav__visible")
    body.classList.add("menu__body")
})
cerrar.addEventListener('click', () =>{
    nav.classList.remove("nav__visible")
    body.classList.remove("menu__body")
})

abrirfoot.addEventListener('click', ()=>{
    textfoot.classList.add("footer__info__text_open")
    cerrarfoot.classList.add("footer__infobtnclose_open")

})
cerrarfoot.addEventListener('click', ()=>{
    textfoot.classList.remove("footer__info__text_open")
    cerrarfoot.classList.remove("footer__infobtnclose_open")
})
