// html page elements
const main = document.getElementsByTagName('main')[0];
const footerText = document.getElementsByTagName('footer')[0].getElementsByTagName('p')[0];
let clItems = main.getElementsByTagName('li');

// when user clicks on someone's photo, this person gets deleted from the liked list
function removeChat() {
    this.closest('li').remove();
    
    if (clItems.length === 0) {
        footerText.textContent = `You haven't liked anyone yet.`
    }
}

// for every liked person...
for (let i = 0; i < clItems.length; i++) {
    
    // give every chat the right details
    const photo = main.getElementsByTagName('img')[i];

    // make every profile picture clickable (and execute removeChat function)
    photo.addEventListener('click', removeChat)
}