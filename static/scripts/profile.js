// html page elements
const dislikeButtons = document.querySelectorAll('.dislikebutton');

// when you press the (dis)like button
function dislikePerson() {
let node = event.target;
    let id = node.dataset.id;

    var res = new XMLHttpRequest();
    res.open('DELETE', '/' + id);
    res.onload = onload;
    res.send();

    function onload() {
        if (res.status !== 200) {
            throw new Error('Could not delete!');
        }

    window.location = '/';
    }
}

// eventlisteners
for (let i = 0; i < dislikeButtons.length; i++){
    dislikeButtons[i].addEventListener('click', dislikePerson);
}