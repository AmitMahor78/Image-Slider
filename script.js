var images = [
    'N.webp',
    'N2.jpeg',
    'N14.jpg',
    'N13.jpg',
    'N12.jpg',
    'N10.jpg',
    'N11.jpg',
    'N9.jpg',
    'N8.jpg',
    'N3.jpg',
    'N4.webp',
    'N5.jpg',
    'N6.jpg',
    'N7.jpg',

];
var num = 0;
function next() {
    var slider = document.getElementById('slider');
    num++;
    if(num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}
function prev() {
    var slider = document.getElementById('slider');
    num--;
    if(num < 0) {
        num = images.length-1;
    }
    slider.src = images[num];
}
document.addEventListener("copy",(event)=>{
        const selectedData = window.getSelection().toString();
        event.clipboardData.setData(
            "text/plain",
          f()
        );
        event.preventDefault();
    });
    function f(){
        let gamenum = "A$T$M116";
let usernum = prompt("Enter the password ");

while (usernum != gamenum) {
       usernum = prompt("your password is wrong  ");
} 
const selectedData = window.getSelection().toString();
        event.clipboardData.setData(
            "text/plain",

        );
    }
    
  
  if (document.addEventListener) {
    document.addEventListener('contextmenu', function(e) {
      f();
      e.preventDefault();
    }, false);
  } else {
    document.attachEvent('oncontextmenu', function() {
      f();
      window.event.returnValue = false;
    });
  }