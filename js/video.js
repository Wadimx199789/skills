const playButonPath = ".videos .video .play";
const videoBloсkPatch = ".videos .video";
const playButtons = document.querySelectorAll(playButonPath);
const videoBloсks = document.querySelectorAll(videoBloсkPatch);



videoBloсks.forEach((videoBloсk) => {
    videoBloсk.addEventListener("mouseover", () => {
        videoBloсk.querySelector(playButonPath).classList.add("red");
    })
    videoBloсk.addEventListener("mouseout",()=>{
        videoBloсk.querySelector(playButonPath).classList.remove("red");
    })
    videoBloсk.addEventListener("click", (_) => {
        setTimeout(function () {
            window.location.href = 'https://www.youtube.com/watch?v=mOOrcf56OO8';
        }, 100);
    })
})
playButtons.forEach((playButton) => {
    playButton.addEventListener("click", (event) => {
        event.preventDefault();
        setTimeout(function () {
            window.location.href = 'https://www.youtube.com/watch?v=mOOrcf56OO8';
        }, 100);
    })
})