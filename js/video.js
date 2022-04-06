var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay = false;
	video.loop = false

});


document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
 	video.play();
 	document.querySelector("#volume").innerHTML = video.volume * 100 +"%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function(){
	console.log("Slow Down Video");
	video.playbackRate *=0.95
	console.log("Speed is", video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function(){
	console.log("Skip ahead");
	video.currentTime += 15
	if (video.currentTime >=video.duration)
		video.currentTime = 0
	console.log("Video current time is", video.currentTime)
});