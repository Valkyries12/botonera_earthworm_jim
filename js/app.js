window.addEventListener("keydown", pressKey);
window.addEventListener("click", click);

function click(e) {
    const data = e.target.attributes[1].nodeValue;
    const audio = document.querySelector(`audio[data-key="${data}"]`);
    const key = document.querySelector(`.key[data-key="${data}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    if(e.target == key) {
        key.classList.add("playing");
        key.addEventListener("transitionend", function() {
            key.classList.remove("playing");
        });
    }
    

}

function pressKey(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();

    const keys = document.querySelectorAll(".key");
    keys.forEach(function(){
        key.classList.add("playing");
        key.addEventListener("transitionend", function() {
            key.classList.remove("playing");
        });
    });
}
