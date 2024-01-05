const slides = document.querySelectorAll('.slider__slide')
const btnLeft = document.querySelector('.button--left')
const btnRight = document.querySelector('.button--right')

let currentImage = 0 ;
const maxSlides = slides.length-1;



const goToSlide = function(currentSlide){
  slides.forEach((slide,index)=>(slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`))
}

// Next Slide
const nextSlide = function(){
  if(currentImage === maxSlides){
    currentImage = 0;
  }else{
    currentImage ++;
  }
  goToSlide(currentImage)

}
// Previous Slide
const prevSlide = function (){
  if(currentImage === 0){
    currentImage = maxSlides;
  }else{
    currentImage--;
  }
  goToSlide(currentImage)
}


// Arrow handlers
document.addEventListener('keydown',function(e){
console.log(e)
if(e.key === 'ArrowRight'){
  nextSlide();
}
if(e.key === 'ArrowLeft')
{
  prevSlide()

}
})


// Go to slide
goToSlide(0)
// Event Handlers

btnRight.addEventListener('click',nextSlide)
btnLeft.addEventListener('click',prevSlide)