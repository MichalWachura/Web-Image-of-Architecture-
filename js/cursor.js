


const cursor = document.querySelector('.cursor_container')


function moveCursor (e){
  let x = e.clientX;
  let y = e.clientY;
  //console.log(x,y)
  cursor.style.left = `${x}px`
  cursor.style.top = `${y}px`

}

function rotateCursor (){
  //cursor.style.rotate = "45deg"
  
}

document.addEventListener('mousemove',moveCursor);
cursor.addEventListener('click',rotateCursor)
