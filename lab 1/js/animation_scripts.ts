window.addEventListener("scroll", function(){
    const header = document.getElementById("header");

    if (this.window.pageYOffset > 0) header?.classList.add('header_dark_background')
    else header?.classList.remove('header_dark_background')
});