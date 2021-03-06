# ✨ CATU'S QUEST ✨
## 👻 HAPPY 24TH BIRTHDAY CATU!

## ✂️ instructions for glennjamin
- add photos to `static/img`
- add audio files to `static/audio`
- add data to `src/data/scenes.js` (example below)

```js
const catusRoom = {
  descriptions: [
    {
      text:
        "> You are asleep in bed until a faint sks sks sks sound wakes you up. Wait a damn minute…",
      img: "img/example.png",
    },
    {
      text:"",
      img: "",
    },
  ],
  question: "What do you do?",
  options: [
    {
      text: "Go back to bed",
      leadsTo: null,
      message:
        "Uh oh! The white light burns through you and the rest of the known universe. Try again.",
      audio: "audio/example.mp3",
    },
    {
      text: "Investigate",
      leadsTo: "zachsCave",
      message: "Brave choice! #girlboss",
      audio: "",
    },
  ],
  audio: "audio/example.mp3",
  img: "img/example.png",
};
```