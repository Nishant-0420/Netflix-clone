

const n= document.getElementById('nave')

window.addEventListener('scroll', function() {
    if(window.scrollY >=100){
        n.classList.add('nav-black')
    }
    else{
        n.classList.remove('nav-black')
    }
})

$(".banner-btn").on("click",function(){
 $(".nav-title").addClass("red")
});