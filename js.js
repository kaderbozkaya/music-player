const progress= document.getElementById("progress")
const song= document.getElementById("song")
const onOff= document.getElementById("onOff")

/* function to turn the song on or off */

function playPause(){
    if(onOff.classList.contains("fa-pause")){
        song.pause()
        onOff.classList.remove("fa-pause")
        onOff.classList.add("fa-play")
    } else { song.play()
        onOff.classList.add("fa-pause")
        onOff.classList.remove("fa-play")  
    }
}

/*circle on progress bar progress according to the song that is playing */

if(song.play()){
    setInterval(()=>{
        progress.value= song.currentTime
    },500)
}

/*forward or rewind a song with the circle on the progress bar*/

progress.onchange= function(){
    song.play()
    song.currentTime= progress.value
    onOff.classList.add("fa-pause")
    onOff.classList.remove("fa-play") 

}
