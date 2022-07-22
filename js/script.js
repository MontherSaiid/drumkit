

window.addEventListener('keydown', (e) => {
    let key = e.key;
    let myDiv = document.querySelector(`div[data-char="${key}"]`);
    let audioFile = document.querySelector(`audio[char="${key}"]`);

    if (audioFile !== null) {
        audioFile.currentTime = 0;
        audioFile.play();
        myDiv.classList.add('myEffect');
        setTimeout(() => {
            myDiv.classList.remove('myEffect');
        }, 500);
    }

});

