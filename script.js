function menuClick(){
    const menu = document.getElementById("mobileMenu");
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden')
    }else{
        menu.classList.add('hidden')
    }
}


