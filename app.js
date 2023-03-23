const humbuger = document .querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document .querySelector('.header .nav-bar .nav-list ul');
const menu_item = document .querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header .container');


humbuger.addEventListener('click', () => {
humbuger.classList.toggle('active');
mobile_menu.classList.toggle('active');
});


document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 250){
        header.style.backgroundcolor = "#29323c";
    }
    else{
        header.style.backgroundcolor = "transparent";
    }
})

menu_item.forEach(item => {
    item.addEventListener('click',()=>{
        humbuger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    })
});

