console.log("welcome to spotify");
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songitems = Array.from(document.getElementsByClassName('songitem'));
let masterSongName = document.getElementById('mastersongname');
let songs = [
    {songName:"warriyo",filepath:"1.mp3",coverpath:"1.jpg"},
    {songName:"cielo",filepath:"2.mp3",coverpath:"2.jpg"},
    {songName:"dead key",filepath:"3.mp3",coverpath:"3.jpg"},
    {songName:"different",filepath:"4.mp3",coverpath:"4.jpg"},
    {songName:"salam",filepath:"5.mp3",coverpath:"5.jpg"},
    {songName:"dhinkchika",filepath:"6.mp3",coverpath:"6.jpg"},
    {songName:"Ishq",filepath:"7.mp3",coverpath:"7.jpg"},
    {songName:"begam",filepath:"8.mp3",coverpath:"8.jpg"},


]
songitems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByClassName('imgclass')[0].src = songs[i].coverpath;
    element.getElementsByClassName('songname')[0].innerText = songs[i].songName;
    
})
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1 ;

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
            element.classList.add('fa-play');
            })

        gif.style.opacity = 0 ;
    }
})
audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    //update seekbar
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
//    console.log(progress); 
   myProgressBar.value = progress;

})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100 ;
})
const makeAllPlay = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.classList.add('fa-play');
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
 element.addEventListener('click',(e)=>{
    makeAllPlay();
songIndex = parseInt(e.target.id);
console.log(e.target.classList.contains('fa-play'));
e.target.classList.remove('fa-play');
e.target.classList.add('fa-pause');
audioElement.src = `songs/${songIndex+1}.mp3`;
masterSongName.innerText = songs[songIndex].songName;
audioElement.currentTime = 0 ;
audioElement.play();
gif.style.opacity = 1 ;
masterPlay.classList.remove('fa-play');
masterPlay.classList.add('fa-pause');



 })

})
// Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
//     element.addEventListener('click',(e)=>{
       
//    songIndex = parseInt(e.target.id);
   
   
//    if(e.target.classList.contains('fa-pause') == true)
//    {
//        e.target.classList.remove('fa-pause');
//        e.target.classList.add('fa-play');
//        audioElement.pause();
//        gif.style.opacity = 0 ;
//        masterPlay.classList.remove('fa-pause');
//        masterPlay.classList.add('fa-play');
       
   
//    }
//     })
   
//    })

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9)
    {
    songIndex = 0;
    }
    else
    {
        songIndex += 1;
    }
audioElement.src = `songs/${songIndex+1}.mp3`;
masterSongName.innerText = songs[songIndex].songName;
makeAllPlay();
document.getElementById(`${songIndex}`).classList.remove('fa-play');
document.getElementById(`${songIndex}`).classList.add('fa-pause');
audioElement.currentTime = 0 ;
audioElement.play();
masterPlay.classList.remove('fa-play');
masterPlay.classList.add('fa-pause');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0)
    {
    songIndex = 9;
    }
    else
    {
        songIndex -= 1;
    }
audioElement.src = `songs/${songIndex+1}.mp3`;
masterSongName.innerText = songs[songIndex].songName;
makeAllPlay();
document.getElementById(`${songIndex}`).classList.remove('fa-play');
document.getElementById(`${songIndex}`).classList.add('fa-pause');
audioElement.currentTime = 0 ;
audioElement.play();
masterPlay.classList.remove('fa-play');
masterPlay.classList.add('fa-pause');
})
document.getElementById('masterplay').addEventListener('click',()=>{

    if(document.getElementById('masterplay').classList.contains('fa-play')==true)
    {
        
        document.getElementById(`${songIndex}`).classList.remove('fa-pause');
        document.getElementById(`${songIndex}`).classList.add('fa-play');
         gif.style.opacity = 1 ;

    }
    else{
        document.getElementById(`${songIndex}`).classList.remove('fa-play');
        document.getElementById(`${songIndex}`).classList.add('fa-pause');

        gif.style.opacity = 0 ;
    }
})