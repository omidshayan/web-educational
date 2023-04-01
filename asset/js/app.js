const hamburger = document.querySelector('.ham-menu')
const responsiveMenu = document.querySelector('.nav-res')
const overlay = document.querySelector('.overlay')
const close = document.querySelector('.close-menu')
const submenu = document.querySelectorAll('.submenu')

// show menu
hamburger.addEventListener('click' , function(){
    responsiveMenu.classList.add('active')
    overlay.classList.add('active')
})

// hide menu
close.addEventListener('click' , function(){
    closeItems();
})
overlay.addEventListener('click' , function(){
    closeItems();
})
function closeItems(){
    responsiveMenu.classList.remove('active')
    overlay.classList.remove('active')
}

//submenu
submenu.forEach(item => {
    item.addEventListener('click' , function(){
        item.classList.toggle('show-icon')
        const mega = item.nextElementSibling
        mega.classList.toggle('activemenu')
    })
})



// slider
const slides = document.querySelector('.slider-item').children;
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const totalSlides = slides.length;
let index = 0;
let duration = 4000;


prev.onclick = function(){
    slide('prev');
}

next.onclick = function(){
    slide('next');
}

function slide(direction){
    progress()
   if(direction=='next'){
       if(index == totalSlides-1){
           index = 0;
       }else{
           index++
       }
       console.log(index)
   } 

   if(direction=='prev'){
       if(index == 0){
           index = totalSlides-1;
       }else{
           index--
       }
       console.log(index)
   }

   clearInterval(timer);

   timer = setInterval(autoSlide, duration)

   for(let i=0;i <slides.length;i++){
       slides[i].classList.remove('active')
   }
   slides[index].classList.add('active')
}

function progress(){
    document.querySelector('.progress').innerHTML = ""
    const div = document.createElement('div');
    div.style.width = "0";
    div.style.height = "5px";
    div.style.position = "absolute";
    div.style.animation = "progress " + duration/1000 + "s linear";
    document.querySelector('.progress').appendChild(div)
}


function autoSlide(){
    slide('next');
}

let timer = setInterval(autoSlide, duration)


progress()