((d)=>{
   const $btnMenu = document.querySelector(".menu-btn"),
    $menu = document.querySelector(".menu"),
    $header__title = document.querySelector(".header__title");
    let $header = $menu.closest(".header");
    
    $btnMenu.addEventListener("click", ()=>{
        $btnMenu.firstElementChild.classList.toggle("none");
        $btnMenu.lastElementChild.classList.toggle("none");
        $menu.classList.toggle("is-active");
        $header.classList.toggle("black");
        $header__title.classList.toggle("none");
    });

    d.addEventListener("click", e=>{
        if(!e.target.matches(".menu a")) return false;
        // disappear menu when clicked
        $btnMenu.firstElementChild.classList.toggle("none");
        $btnMenu.lastElementChild.classList.add("none");
        $menu.classList.remove("is-active");
        $header.classList.remove("black");
        $header__title.classList.remove("none");
    });
})(document);

