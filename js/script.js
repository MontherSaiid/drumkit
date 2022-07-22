

window.addEventListener('keydown', (e) => {
    let key = e.keyCode;
    let myDiv = document.querySelector(`div[data-key="${key}"]`);


    let audioFile = document.querySelector(`audio[data-key="${key}"]`);
    if (audioFile !== null) {
        audioFile.currentTime = 0;
        audioFile.play();
        myDiv.classList.add('myEffect');
        setTimeout(() => {
            myDiv.classList.remove('myEffect');
        }, 500);
    }

});