//  let currSong=new Audio()
// let menu=document.querySelector(".menu")
// let play=document.querySelector("#play")
// let prev=document.querySelector("#prev")
// let next=document.querySelector("#next")
// let wrong=document.querySelector(".mark")
// let songUl = document.querySelector(".songscard").getElementsByTagName("ul")[0];
// let songs;
// let currFolder;
// // let left=document.querySelector(".left")
// menu.addEventListener("click",e=>{
//   //menu bar
//   document.querySelector(".left").style.left=0
// })
// wrong.addEventListener("click",e=>{
//   document.querySelector(".left").style.left="-100%"
// })

// async function getSongs(folder) {
//   currFolder=folder
//   let a = await fetch(`http://127.0.0.1:3000/${folder}`);
//   // let b=await fetch("https://127.0.0.1:3000/ncs")
//   let response = await a.text(); 
//   let div = document.createElement("div");
//   div.innerHTML = response;
//   let as = div.getElementsByTagName("a");
//   let songs = [];

//   for (let i = 0; i < as.length; i++) {
//     const href = as[i].getAttribute("href"); 
//     if (href && href.endsWith(".mp3")) {
//       songs.push(href.replaceAll("%5C", "/"));
//     }
//   }

//      songUl.innerHTML = '';
//     for (const song of songs) {
//       const fileName = song.split("/").pop().replaceAll("%20", " ");
//       songUl.innerHTML += `
//        <li data-song="${song}">
//           <div class="li">
//                <div class="name">
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="#ffffff" d="M532 71C539.6 77.1 544 86.3 544 96L544 400C544 444.2 501 480 448 480C395 480 352 444.2 352 400C352 355.8 395 320 448 320C459.2 320 470 321.6 480 324.6L480 207.9L256 257.7L256 464C256 508.2 213 544 160 544C107 544 64 508.2 64 464C64 419.8 107 384 160 384C171.2 384 182 385.6 192 388.6L192 160C192 145 202.4 132 217.1 128.8L505.1 64.8C514.6 62.7 524.5 65 532.1 71.1z"/></svg>
//                     ${fileName}
//                     </div>
//                  <div class="play"> Play<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="#ffffff" d="M64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320zM252.3 211.1C244.7 215.3 240 223.4 240 232L240 408C240 416.7 244.7 424.7 252.3 428.9C259.9 433.1 269.1 433 276.6 428.4L420.6 340.4C427.7 336 432.1 328.3 432.1 319.9C432.1 311.5 427.7 303.8 420.6 299.4L276.6 211.4C269.2 206.9 259.9 206.7 252.3 210.9z"/></svg>
//                   </div>
//           </div>
//        </li>`;
//     }
//      Array.from(songUl.getElementsByTagName("li")).forEach(e => {
//     e.addEventListener("click", () => {
//       const path = e.getAttribute("data-song");
//       playmusic(path);
//     });
//   });
//     return songs


// }
// const playmusic=(t,pause=false)=>{
//     currSong.src=t
//     if(!pause){
//         currSong.play()
//         play.src="pause.svg"
//     }
    
//     document.querySelector(".songInfo").innerHTML=t.split(`${currFolder}/`)[1].replaceAll("%20"," ")
//     document.querySelector(".time").innerHTML="00:00/00:00"
// }
// async function main() {
  
//   let album1 = document.querySelector(".coolie");
//   let folder;
//   let album2=document.querySelector(".og")
//   songs=await getSongs("songs");
//     playmusic(songs[0], true);
//   songUl.innerHTML=''
//     for (const song of songs) {
//       const fileName = song.split("/").pop().replaceAll("%20", " ");
//       songUl.innerHTML += `
//        <li data-song="${song}">
//           <div class="li">
//                <div class="name">
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="#ffffff" d="M532 71C539.6 77.1 544 86.3 544 96L544 400C544 444.2 501 480 448 480C395 480 352 444.2 352 400C352 355.8 395 320 448 320C459.2 320 470 321.6 480 324.6L480 207.9L256 257.7L256 464C256 508.2 213 544 160 544C107 544 64 508.2 64 464C64 419.8 107 384 160 384C171.2 384 182 385.6 192 388.6L192 160C192 145 202.4 132 217.1 128.8L505.1 64.8C514.6 62.7 524.5 65 532.1 71.1z"/></svg>
//                     ${fileName}
//                     </div>
//                  <div class="play"> Play<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="#ffffff" d="M64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320zM252.3 211.1C244.7 215.3 240 223.4 240 232L240 408C240 416.7 244.7 424.7 252.3 428.9C259.9 433.1 269.1 433 276.6 428.4L420.6 340.4C427.7 336 432.1 328.3 432.1 319.9C432.1 311.5 427.7 303.8 420.6 299.4L276.6 211.4C269.2 206.9 259.9 206.7 252.3 210.9z"/></svg>
//                   </div>
//           </div>
//        </li>`;
//     }
//      Array.from(songUl.getElementsByTagName("li")).forEach(e => {
//     e.addEventListener("click", () => {
//       const path = e.getAttribute("data-song");
//       playmusic(path);
//     });
//   });
  

//   // ✅ Preload the first song but don't render the list yet

//   // ✅ Render songs only when Album1 is clicked
 

//     if (songs.length > 0) {
//       Array.from(songUl.getElementsByTagName("li")).forEach(e => {
//         e.addEventListener("click", element => {
//           const path = e.getAttribute("data-song");
//           playmusic(path);
//         });
//       });
//     }
  
//   // ✅ Play/Pause toggle
//   play.addEventListener("click", () => {
//     if (currSong.paused) {
//       currSong.play();
//       play.src = "pause.svg";
//     } else {
//       currSong.pause();
//       play.src = "play.svg";
//     }
//   });

//   // ✅ Update time
//   currSong.addEventListener("timeupdate", () => {
//     document.querySelector(".time").innerHTML =
//       `${secondsToMinutesSeconds(currSong.currentTime)}/${secondsToMinutesSeconds(currSong.duration)}`;
//   });
//  prev.addEventListener("click", () => {
//   const currentFile = currSong.src.split("/").pop(); // song1.mp3
//   const id = songs.findIndex(s => s.split("/").pop() === currentFile);
//   if (id > 0) {
//     playmusic(songs[id - 1]);
//   }
// });

// next.addEventListener("click", () => {
//   const currentFile = currSong.src.split("/").pop(); // song1.mp3
//   const id = songs.findIndex(s => s.split("/").pop() === currentFile);
//   if (id >= 0 && id < songs.length - 1) {
//     playmusic(songs[id + 1]);
//   }
// });
// Array.from(document.querySelectorAll(".song").forEach(e=>{
//     e.addEventListener("click", async item=>{
//       songs=await getSongs(`${item.currentTarget.dataset.folder}`)
//        if (songs.length > 0) playmusic(songs[0], true);
//     })
//   }))
  
// }


// function secondsToMinutesSeconds(seconds) {
//   if (isNaN(seconds) || seconds < 0) return "0:00";

//   const minutes = Math.floor(seconds / 60);
//   const secs = Math.floor(seconds % 60);

//   return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  
// }
// main();
document.addEventListener("DOMContentLoaded", () => {
  const currSong = new Audio();
  const playBtn = document.querySelector("#play");
  const prevBtn = document.querySelector("#prev");
  const nextBtn = document.querySelector("#next");
  const menu = document.querySelector(".menu");
  const wrong = document.querySelector(".mark");
  const songUl = document.querySelector(".songscard ul");
  const songInfo = document.querySelector(".songInfo");
  const timeDisplay = document.querySelector(".time");

  // Songs stored in public/songs/
  const songs = [
    "/songs/cascade.mp3"
  ];

  let currentIndex = 0;

  // Sidebar toggle
  menu.addEventListener("click", () => {
    document.querySelector(".left").style.left = "0";
  });
  wrong.addEventListener("click", () => {
    document.querySelector(".left").style.left = "-100%";
  });

  // Render song list
  function renderSongs() {
    songUl.innerHTML = "";
    songs.forEach((song, index) => {
      const fileName = song.split("/").pop();
      const li = document.createElement("li");
      li.dataset.index = index;
      li.innerHTML = `
        <div class="li">
          <div class="name">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="#ffffff" d="M532 71C539.6 77.1 544 86.3 544 96L544 400C544 444.2 501 480 448 480C395 480 352 444.2 352 400C352 355.8 395 320 448 320C459.2 320 470 321.6 480 324.6L480 207.9L256 257.7L256 464C256 508.2 213 544 160 544C107 544 64 508.2 64 464C64 419.8 107 384 160 384C171.2 384 182 385.6 192 388.6L192 160C192 145 202.4 132 217.1 128.8L505.1 64.8C514.6 62.7 524.5 65 532.1 71.1z"/></svg>
                    ${fileName}
                   </div>
                <div class="play"> Play<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="#ffffff" d="M64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320zM252.3 211.1C244.7 215.3 240 223.4 240 232L240 408C240 416.7 244.7 424.7 252.3 428.9C259.9 433.1 269.1 433 276.6 428.4L420.6 340.4C427.7 336 432.1 328.3 432.1 319.9C432.1 311.5 427.7 303.8 420.6 299.4L276.6 211.4C269.2 206.9 259.9 206.7 252.3 210.9z"/></svg>
                  </div>
        </div>
      `;
      li.addEventListener("click", () => {
        currentIndex = index;
        playMusic(songs[currentIndex]);
      });
      songUl.appendChild(li);
    });
  }

  // Play a song
  function playMusic(src) {
    currSong.src = src;
    currSong.play();
    playBtn.src = "pause.svg";
    songInfo.innerText = src.split("/").pop();
    timeDisplay.innerText = "00:00/00:00";
  }

  // Play/pause toggle
  playBtn.addEventListener("click", () => {
    if (currSong.paused) {
      currSong.play();
      playBtn.src = "pause.svg";
    } else {
      currSong.pause();
      playBtn.src = "play.svg";
    }
  });

  // Next/Prev
  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      playMusic(songs[currentIndex]);
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentIndex < songs.length - 1) {
      currentIndex++;
      playMusic(songs[currentIndex]);
    }
  });

  // Update time display
  currSong.addEventListener("timeupdate", () => {
    timeDisplay.innerText = `${formatTime(currSong.currentTime)}/${formatTime(currSong.duration)}`;
  });

  function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  }

  // Initialize
  renderSongs();
});
