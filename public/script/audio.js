const $audio = document.getElementById('kaz');
const $volume = document.getElementById('volume-div');


// To play an audio

// function playAudio() {
//     $audio.play()
//   }
  
//   // To pause an audio
  
//   function pauseAudio() {
//     $audio.pause()
//   }
  
  //To forward an audio
  
  function forwardAudio() {
    $audio.currentTime += 15.0
  }
  
  //To rewind an audio
  
  function rewindAudio() {
    $audio.currentTime -= 15.0
  }
  
  // To stop or reset an audio
  
//   function stopsong() {
//   $audio.currentTime = 0;}

  
// Set max value when you know the duration
$audio.onloadedmetadata = () => $seekbar.max = $audio.duration
// update audio position
$seekbar.onchange = () => $audio.currentTime = $seekbar.value
// update range input when currentTime updates

$audio.addEventListener('ontimeupdate', async function () {
  $audio.paused;
  if( $seekbar.addEventListener("input") = true){
    $seekbar.value = $audio.currentTime;
}else{
  $audio.play();
  document.getElementById('kaz').pause(); 
     
    buttons.classList.remove('bi-pause-fill');
    buttons.classList.add('bi-play-fill');
}})

$audio.addEventListener('timeupdate',function (){

var sec= new Number();
var min= new Number();
 sec = Math.floor( $audio.currentTime );    
 min = Math.floor( sec / 60 );
min = min >= 10 ? min : '0' + min;    
sec = Math.floor( sec % 60 );
sec = sec >= 10 ? sec : '0' + sec;

var sec2= new Number();
var min2= new Number();
 sec2 = Math.floor( $audio.duration );    
 min2 = Math.floor( sec2 / 60 );
min2 = min2 >= 10 ? min2 : '0' + min2;    
sec2 = Math.floor( sec2 % 60 );
sec2 = sec2 >= 10 ? sec2 : '0' + sec2;

document.getElementById('duration').innerHTML = min2 + ":"+ sec2;

document.getElementById('$seekbar').setAttribute('aria-valuetext',min + ":"+ sec);
document.getElementById('current-time').innerHTML = min + ":"+ sec;

});

const buttons = document.getElementById("play");

buttons.addEventListener("click", () => {
    //$audio.play();
  

  if ($audio.paused) {
    document.getElementById('kaz').play(); 
    buttons.classList.remove('bi-play-fill');
    buttons.classList.add('bi-pause-fill');
    

} else {
    document.getElementById('kaz').pause(); 
     
    buttons.classList.remove('bi-pause-fill');
    buttons.classList.add('bi-play-fill');
}

}); 
// $audio.addEventListener('pause',function (){
// document.getElementById('play').play();
// });
// $audio.addEventListener('play',function (){
// document.getElementById('play').play();
// });

// function SetVolume(val)
//     {
//         const player = document.getElementById('$audio');
//         player.volume = val / 100;
//     }
    

let volume = document.querySelector("#volume-control");
$audio.volume = 1;
volume.addEventListener("input", function(e) {
$audio.volume = e.currentTarget.value / 100;
})

let seekbar = document.querySelector("#$seekbar");
seekbar.addEventListener("input", function(e) {
$audio.seekbar = e.currentTarget.value / 1528.267755;
})

