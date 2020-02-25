var box = document.getElementById('box');

function mouseHandler (e){
    var x = Math.ceil(e.pageX / window.innerWidth * 100) + '%';
    var y = Math.ceil(e.pageY / window.innerHeight * 100) + '%';
    box.style.backgroundPosition = x + y;
}

document.addEventListener('mousemove', mouseHandler);