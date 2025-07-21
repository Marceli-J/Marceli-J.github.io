function clicked_button () {
    if (screen.width <= 500) {
        let display = document.getElementsByClassName('dropdown-content');
        for (let i = 0; i < 2; i++) {
            display[i].style.animation = "show 1s ease 0.1s normal forwards";
            display[i].style.display = 'block';
        }
    }
}
function out () {
    if (screen.width <= 500) {
        let display = document.getElementsByClassName('dropdown-content');
        for (let i = 0; i < 2; i++) {
            display[i].style.opacity = '0';
            display[i].style.display = 'none';
        }
    }
}
