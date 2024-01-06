const descriptionBtn = document.querySelector('.section__info');
const section2 = document.getElementById('section__2')

descriptionBtn.addEventListener('click',function(e){
    
    section2.scrollIntoView({behavior:'smooth'})
    // Scrolling Old School
    /*
    const s2coords = section2.getBoundingClientRect()
    console.log(s2coords)
    console.log(e.target.getBoundingClientRect())
    //window.scrollTo(s2coords.left + window.pageXOffset,s2coords.top + window.pageYOffset)
    
       window.scrollTo({
        left:s2coords.left + window.pageXOffset,
        top: s2coords.top + window.pageYOffset,
        behavior :'smooth'
    })
    */
    
})