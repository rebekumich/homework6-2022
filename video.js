var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay = false;
	video.loop = false

});

//Play Function//
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
 	video.play();
 	document.querySelector("#volume").innerHTML = video.volume * 100 +"%";
});

//Pause Function//
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

//Slower Function//
document.querySelector("#slower").addEventListener("click", function(){
	console.log("Slow Down Video");
	video.playbackRate *=0.95
	console.log("Speed is", video.playbackRate)
});

//Faster Function//
document.querySelector("#faster").addEventListener("click", function(){
	console.log("Speed Up Video");
	video.playbackRate *=1.05
	console.log("Speed is", video.playbackRate)
});

//Skip Function//
document.querySelector("#skip").addEventListener("click", function(){
	console.log("Skip ahead");
	video.currentTime += 15
	if (video.currentTime >=video.duration)
		video.currentTime = 0
	console.log("Video current time is", video.currentTime)
});

//Mute Function//
document.querySelector("#mute").addEventListener("click", function (){

    if (video.muted === false) {    
           video.muted = true;
		   document.querySelector("#mute").innerHTML= "unmute";
    }

    else {
        video.muted = false;
		document.querySelector("#mute").innerHTML= "mute";
    }
	});

//Slider Function//
document.querySelector("#slider").addEventListener("change", function (){
	console.log(this.value)
	video.volume=this.value/100
	document.querySelector("#volume").innerHTML = video.volume * 100 +"%";
})

//Style Function//
document.querySelector("#vintage").addEventListener("click", function (){
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function (){
	video.classList.add("original")
	video.classList.remove("oldSchool")
});
