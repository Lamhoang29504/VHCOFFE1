let search = document.querySelector(".search-box");

document.querySelector("#search-icon").onclick =() => {
    search.classList.toggle('active')
}


let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow' , window.scrollY > 0 );
});


$(document).ready(function(){
    $('.eye').click(function(){
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        if($(this).hasClass('open')){
            $(this).prev().attr('type', 'text');
        }else{
            $(this).prev().attr('type', 'password');
        }
    });
});