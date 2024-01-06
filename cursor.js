


const cursor = document.querySelector('.cursor_container')


function moveCursor (e){
  let x = e.clientX;
  let y = e.clientY;
  //console.log(x,y)
  cursor.style.left = `${x}px`
  cursor.style.top = `${y}px`

}
/*
function rotateCursor (){
  cursor.style.transition = "transform 0.10s ease";
  cursor.style.transform = "rotate(45deg)"
  setTimeout(function () {
    cursor.style.transform("rotate(-45deg)");
}, 500);
  
}
*/
document.addEventListener('mousemove',moveCursor);

