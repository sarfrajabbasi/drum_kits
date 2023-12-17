function createElement(el) {
  const element = document.createElement(el);
  return element;
}

const h1 = createElement("h1");
h1.textContent = "Drum Kits";
const i = createElement("i");
i.classList.add("fa-solid", "fa-drum");

const kits = ["snare", "kick", "crash", "tom"];
const audioObj = { 
  crash:"./sounds/crash.mp3",
  kick:"./sounds/kick.mp3",
  snare:"./sounds/snare.mp3",
  tom:"./sounds/tom.mp3",
};
const container = createElement("div");
container.classList.add("container");

h1.appendChild(i);
container.appendChild(h1);

kits.forEach((kit) => {
  const button = createElement("button");
  const audio = createElement('audio');
  button.classList.add("btn");
  button.textContent = kit;
  button.style.backgroundImage = `url("./image/${kit}.png")`
  audio.src = audioObj[kit];
  console.log(audioObj[kit]);

  button.appendChild(audio);
  container.appendChild(button);
  button.addEventListener('click',()=>{
    audio.play()
  })
  window.addEventListener('keydown',(event)=>{
    if(event.key === kit[0]){
        audio.play();
        button.style.transform = 'scale(0.9)'
        button.style.transition = 'transform 0.3s'
        setTimeout(()=>{
            button.style.transform='scale(1)'
        },100)
    }
  })
});

// const divMe = createElement("div");
//   const audio = createElement('audio');
//   divMe.textContent = 'Special Greet';
//   divMe.classList.add('special');
// //   audio.src = './sounds/specialme.mp3'
// //   audio.src = './sounds/specialme.mp3'
//   divMe.appendChild(audio);
//   container.appendChild(divMe);
//   divMe.addEventListener('click',()=>{
//     audio.play()
//   })

document.body.appendChild(container);

