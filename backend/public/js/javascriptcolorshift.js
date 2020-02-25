var box = document.getElementById('box');
var colors = ['red', 'orange', 'yellow', 'green', 'aqua', 'purple', 'magenta'];

(function loop(i) {
    setTimeout(function () {
        box.style.backgroundColor = colors[i];
        i++;
        if (i < colors.length) {
            loop(i);
        } else if (i >= colors.length) {
            i = 0;
            loop(i);
        }
    }, 1000);
})(1);
