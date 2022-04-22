const videoCardPath = "video";
const playButonPath = `.videos .${videoCardPath} .play`;
const videoBloсkPatch = `.videos .${videoCardPath}`;
const videoWrapperPath = ".videos .wrapper";
const playButtons = document.querySelectorAll(playButonPath);
const videoBloсks = document.querySelectorAll(videoBloсkPatch);
const videoWrapper = document.querySelector(videoWrapperPath);

videoBloсks.forEach((videoBloсk) => {
    videoBloсk.addEventListener("mouseover", (_) => {
        videoBloсk.querySelector(playButonPath).classList.add("red");
    })
    videoBloсk.addEventListener("mouseout",(_)=>{
        videoBloсk.querySelector(playButonPath).classList.remove("red");
    })
})

// всплытие (навешиваем event listener на parent node)
videoWrapper.addEventListener("click", (event) => {
    for (let parent of event.path) {
        if (parent.className === videoCardPath) {
            window.location.href = 'https://www.youtube.com/watch?v=mOOrcf56OO8';
            break;
        }
    }
});