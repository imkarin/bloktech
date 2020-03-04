// html page elements
const main = document.getElementsByTagName('main')[0];
const people = main.getElementsByTagName('li');
const likeButtons = document.querySelectorAll('.likebutton');
const dislikeButtons = document.querySelectorAll('.dislikebutton');

let i = 0;

// when you press the (dis)like button
function ratePerson() {
        if (i < (people.length)) { // show next person
            this.closest('li').style.display = 'none';
            i++;
        }
    } 

// eventlisteners
for (let i = 0; i < likeButtons.length; i++){
    likeButtons[i].addEventListener('click', ratePerson);
    dislikeButtons[i].addEventListener('click', ratePerson);
}