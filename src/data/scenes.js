const catusRoom = {
  descriptions: [
    {
      text:
        "> You are asleep in bed until a faint sks sks sks sound wakes you up. Wait a damn minute…",
      img: "img/catus-room.png",
    },
    {
      text:
        "> Eek! You open your eyes to see Ymer on your curtain. He’s scratching at something…\n> A milky white light starts to fill the room.",
      img: "img/example.png",
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
  audio: "audio/blueside.mp3",
  img: "img/example.png",
};

const zachsCave = {
  descriptions: [
    {
      text:
        "> You get out of bed and go towards the curtain. As soon as you touch the glowing tear you’re sucked into a blinding white light.",
      img: "",
    },
    {
      text:
        "> When the light fades, you’re in a strange room. A hooded figure appears before you.\n> He slowly lowers his hood. Is that…",
      img: "",
    },
    {
      text:
        "> American actor, comedian, musician and writer Zach Galifinakis!? What’s he doing here?\n> Zach: Approach, seeker, and ask.\n> You: Where am I? How did I get here?",
      img: "",
    },
    {
      text:
        "> Zach: Before I can answer that, you need to understand that the universe is a precarious collection of realities layered on top of each other and separated by bands of cosmic energy. Over time, the barriers between realities have become thin in some places. Thin enough to break…",
      img: "",
    },
    {
      text:
        "> Zach: Something or someone in your world must have made a hole in the space time continuum. Now, you’re in the in-between. To return home and save your world from the rift, you’ll have to navigate through the dimensions that were affected by the breach and repair the tear.",
      img: "",
    },
    {
      text:
        "> Zach: Look for signs of the rift to navigate between realms-- changes to the flow of space time have cascading effects. Make sure to stabilize the worlds you visit before you leave. But be careful playing God-- the choices you make will ripple. Choose a portal to start, and good luck!",
      img: "",
    },
  ],
  question: "Choose a door.",
  options: [
    {
      text: "Door 1",
      leadsTo: "jeffDavis",
      message: "Interesting choice...",
      audio: "",
    },
    {
      text: "Door 2",
      leadsTo: "wrbb",
      message: "Interesting choice...",
      audio: "",
    },
  ],
  audio: "audio/example.mp3",
  img: "img/example.png",
};

const wrbb = {
  descriptions: [
    {
      text:
        ">  You blink, and the next think you know you’re standing in the WRBB studio. But it looks like someone missed their show, and the PSAs are on a loop!",
      img: "",
    },
  ],
  question: "Save the listeners with a song.",
  options: [
    {
      text: "Wannabe by the Spice Girls",
      leadsTo: "pen15",
      message: "So true, friendship never ends!",
      audio: "",
    },
    {
      text: "I Was Here by Beyoncé Knowles",
      leadsTo: "triwizard",
      message:
        "The hearts that you’ve touched will be the proof that you leave. ",
      audio: "",
    },
    {
      text: "Supermassive Black Hole by Muse",
      leadsTo: "forks",
      message: "Set those souls alight!",
      audio: "",
    },
    {
      text: "Driver's License by Olivia Rodrigo",
      leadsTo: "dmv",
      message: "Red lights! Stop Signs!",
      audio: "",
    },
  ],
  audio: "",
  img: "",
};

const jeffDavis = {
  descriptions: [
    {
      text:
        "> The air turns warm and smoggy. Smells like Los Angeles...\n> In front of you is a house you don’t recognize.",
      img: "",
    },
    {
      text:
        "> You go to the mailbox. AH! The letters are all addressed to Jeff Davis!",
      img: "",
    },
  ],
  question: "What do you do?",
  options: [
    {
      text:
        "Burn it to the ground. He should pay for his crimes. Maybe the world would be better off without Jeff anyways… ",
      leadsTo: null,
      message: "Nice try, you petty bitch. Pick again.",
      audio: "",
    },
    {
      text:
        "Knock on the door. Show him the world he could have created for Stiles and Derek with Tumblr fan edits. Help him get better.",
      leadsTo: "beaconHills",
      message: "",
      audio: "",
    },
    {
      text:
        "Walk away. It’s not worth the risk to the stability of other worlds to change something here.",
      leadsTo: "prideAndPrejudice",
      message:
        "Good call. It was just a TV show, and who would care about that?",
      audio: "",
    },
  ],
  audio: "",
  img: "",
};

const beaconHills = {
  descriptions: [
    {
      text:
        ">  You blink and you’re standing outside again, near a lacrosse field. It’s colder, and the moon is full. A howl pierces the air, and one of the players whips towards you, his red eyes piercing yours. Could this be… Beacon Hills?",
      img: "",
    },
    {
      text:
        "> You walk over to the sidelines. Everyone is here: Scott, Isaac, Lydia, Allison… Everyone except Stiles. He should be playing! And where is Derek?\n> Behind you, the pack of Alphas emerges from the woods. They head towards Scott-- looks like they’re going to attack!",
      img: "",
    },
    {
      text:
        "> You: It’ll be okay. With the help of Stiles and the rest of his pack, Scott will win.\n> Allison: Stiles? He’s barely been around since he and Derek started dating. He’s become a horrible friend, and without him and Derek here, Scott’s gonna die!",
      img: "",
    },
    {
      text:
        ">  Zach told you not to play God in other realms… maybe in order to save Scott you have to make things right.",
      img: "",
    },
  ],
  question: "How do you fix things in Beacon Hills?",
  options: [
    {
      text:
        "I’m sorry… Save Scott? Pass. Focus instead on finding out more about how Sterek got together. Maybe someone has video?",
      leadsTo: null,
      message: "On the one hand, you save Sterek. On the other, you doom humanity if this change ripples across the universe in a calamitous way. Tough call there, but maybe reconsider.",
      audio: "",
    },
    {
      text:
        "Track down Stiles and Derek so they can come help Scott face the Alphas. Then, find a way to break them up (probably by seducing Stiles). It’s the only way.",
      leadsTo: "ilMondo",
      message: "",
      audio: "",
    },
  ],
  audio: "",
  img: "",
};


export const scenes = {
  catusRoom,
  zachsCave,
  wrbb,
  jeffDavis,
  beaconHills,
};

