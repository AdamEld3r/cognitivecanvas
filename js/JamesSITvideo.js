// Autoplay video unmuted - Solution from https://stackoverflow.com/questions/70719678/html5-video-autoplay-with-sound-unmuted

/* Toggle Button to Unmute the Video */

function toggleMute() {
    var video = document.getElementById('IDJamesSITvideo');
    if (video.muted) {
        video.muted = false;
    } else {
        video.muted = true;
    }
}

/* Delay Function to Add SetTimeOut After Defined Interval */

function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

/* Show Video Function to Add Display Property to Show the Video on Click of Button which will fulfilled User Interaction Needs to Browser to Run the Video with Unmute State */

function showVideo() {
    var element = document.getElementById('IDJamesSITvideo');
    var button = document.getElementById('button');
    element.style.display = 'block';
    button.style.display = 'none';
    delay(100).then(() => toggleMute());
}


function introFinished(e) {
    window.location.href = "IDHomeRT.html";
}

document.getElementById('IDJamesSITvideo').addEventListener('ended', introFinished, false);