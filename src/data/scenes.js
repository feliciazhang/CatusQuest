const catusRoom = {
  descriptions: [
    {
      text:
        "> You are asleep in bed until a faint sks sks sks sound wakes you up. Wait a damn minute…",
      img: "img/catu1.png",
    },
    {
      text:
        "> Eek! You open your eyes to see Ymer on your curtain. He’s scratching at something…\n> A milky white light starts to fill the room.",
      img: "img/catu2.png",
    },
  ],
  question: "What do you do?",
  options: [
    {
      text: "Go back to bed",
      leadsTo: null,
      message:
        "Uh oh! The white light burns through you and the rest of the known universe. Try again.",
      audio: "audio/agh.mp3",
    },
    {
      text: "Investigate",
      leadsTo: "zachsCave",
      message: "Brave choice! #girlboss",
      audio: "audio/come-this-way.mp3",
    },
  ],
  audio: "audio/catusroom.mp3",
  img: "img/catu1.png",
};

const zachsCave = {
  descriptions: [
    {
      text:
        "> You get out of bed and go towards the curtain. As soon as you touch the glowing tear you’re sucked into a blinding white light.",
      img: "img/cave1.png",
    },
    {
      text:
        "> When the light fades, you’re in a strange room. A hooded figure appears before you.\n> He slowly lowers his hood. Is that…",
      img: "img/cave2.png",
    },
    {
      text:
        "> American actor, comedian, musician and writer Zach Galifinakis!? What’s he doing here?\n> Zach: Approach, seeker, and ask.\n> You: Where am I? How did I get here?",
      img: "img/cave3.png",
    },
    {
      text:
        "> Zach: Before I can answer that, you need to understand that the universe is a precarious collection of realities layered on top of each other and separated by bands of cosmic energy. Over time, the barriers between realities have become thin in some places. Thin enough to break…",
      img: "img/cave4.png",
    },
    {
      text:
        "> Zach: Something or someone in your world must have made a hole in the space time continuum. Now, you’re in the in-between. To return home and save your world from the rift, you’ll have to navigate through the dimensions that were affected by the breach and repair the tear.",
      img: "img/cave5.png",
    },
    {
      text:
        "> Zach: Look for signs of the rift to navigate between realms-- changes to the flow of space time have cascading effects. Make sure to stabilize the worlds you visit before you leave. But be careful playing God-- the choices you make will ripple. Choose a portal to start, and good luck!",
      img: "img/cave6.png",
    },
  ],
  question: "Choose a door.",
  options: [
    {
      text: "Door 1",
      leadsTo: "jeffDavis",
      message: "Interesting choice...",
      audio: "audio/laugh1.mp3",
    },
    {
      text: "Door 2",
      leadsTo: "wrbb",
      message: "Interesting choice...",
      audio: "audio/laugh2.mp3",
    },
  ],
  audio: "audio/cave.mp3",
  img: "img/cave3.png",
};

const wrbb = {
  descriptions: [
    {
      text:
        ">  You blink, and the next think you know you’re standing in the WRBB studio. But it looks like someone missed their show, and the PSAs are on a loop!",
      img: "img/wrbb.png",
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
  audio: "audio/PSAs.mp3",
  img: "",
};

const dmv = {
  descriptions: [
    {
      text:
        "> You’re standing in a large, drab room. The floors are linoleum and everything is just a little bit… ugly. \n> You: What is this place? It looks almost like… the DMV! \n > In front of you is a poster. You step forward to take a closer look.",
      img: "img/dmv1.png",
    },
    {
      text:
        "> Something about this isn’t right… These rules of the road must have been messed up by the rift.", // use \n character for new lines
      img: "img/DMV2.png",
    },
  ],
  question: "What do you change?",
  options: [
    {
      text: "> A... 2 and 4",
      leadsTo: "pen15", // use null if no way forward
      message:
        "Okay, law abiding biker!",
      audio: "",
    },
    {
      text: "> B... These rules are better anyways. Thanks rift, no changes!",
      leadsTo: "goodwill", // name of next scene object
      message: "If you live long enough to bike again, you may regret this… ¯\_(ツ)_/¯",
      audio: "",
    },
  ],
  audio: "audio/mii.mp3",
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
      audio: "audio/r-u-kidding-me.mp3",
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
      audio: "audio/r-u-kidding-me.mp3",
    },
  ],
  audio: "audio/city.mp3",
  img: "img/jeff.png",
};

const beaconHills = {
  descriptions: [
    {
      text:
        ">  You blink and you’re standing outside again, near a lacrosse field. It’s colder, and the moon is full. A howl pierces the air, and one of the players whips towards you, his red eyes piercing yours. Could this be… Beacon Hills?",
      img: "img/beaconhills1.png",
    },
    {
      text:
        "> You walk over to the sidelines. Everyone is here: Scott, Isaac, Lydia, Allison… Everyone except Stiles. He should be playing! And where is Derek?\n> Behind you, the pack of Alphas emerges from the woods. They head towards Scott-- looks like they’re going to attack!",
      img: "img/beaconhills2.png",
    },
    {
      text:
        "> You: It’ll be okay. With the help of Stiles and the rest of his pack, Scott will win.\n> Allison: Stiles? He’s barely been around since he and Derek started dating. He’s become a horrible friend, and without him and Derek here, Scott’s gonna die!",
      img: "img/beaconhills3.png",
    },
    {
      text:
        ">  Zach told you not to play God in other realms… maybe in order to save Scott you have to make things right.",
      img: "img/beaconhills1.png",
    },
  ],
  question: "How do you fix things in Beacon Hills?",
  options: [
    {
      text:
        "I’m sorry… Save Scott? Pass. Focus instead on finding out more about how Sterek got together. Maybe someone has video?",
      leadsTo: null,
      message: "On the one hand, you save Sterek. On the other, you doom humanity if this change ripples across the universe in a calamitous way. Tough call there, but maybe reconsider.",
      audio: "audio/r-u-kidding-me.mp3",
      audio: "",
    },
    {
      text:
        "Track down Stiles and Derek so they can come help Scott face the Alphas. Then, find a way to break them up (probably by seducing Stiles). It’s the only way.",
      leadsTo: "ilMondo",
      message: "Don’t cry because it’s over, smile because it happened.",
      audio: "",
    },
  ],
  audio: "audio/teenwolf.mp3",
  img: "img/beaconhills1.png",
};

const pen15 = {
  descriptions: [
    {
      text:
        "> You’re standing next to a middle school locker in a Limited Too cami and capris. Maya and Anna wait for you to put your books away.\n> The three of you overhear 7th grade heartthrob Brandt say to his friends: \“Yo, did you guys see the new UGIS list in the 2nd floor bathroom?\”", 
      img: "img/pen151.png",
    },
    {
      text:
        ">  You charge up the stairs, throw open the door to the boy’s bathroom, and there it is: the official UGIS census. But wait a minute...something’s not quite right. ", // use \n character for new lines
      img: "img/pen152.png",
    },
  ],
  question: "Who isn’t UGIS?",
  options: [
    {
      text: "> A... Vision",
      leadsTo: null, // use null if no way forward
      message:
        "I’m sorry. Vision is UGIS. Try again.",
      audio: "audio/agh.mp3",
    },
    {
      text: "> B... Adam Driver",
      leadsTo: null, // name of next scene object
      message: "I’m sorry. Adam Driver is UGIS. Try again.",
      audio: "audio/agh.mp3",
    },
    {
      text: "> C... Jungkook",
      leadsTo: "bike", // use null if no way forward
      message:
        "No one who would give up their own heart could ever be UGIS. #Junglin4ever",
      audio: "audio/agh.mp3",
    },
    {
      text: "> D... Catalina Berretta",
      leadsTo: null, // use null if no way forward
      message:
        "I’m sorry. Catu is UGIS. If she didn’t want to be UGIS, she would always take out the compost on time. Try again.",
      audio: "audio/r-u-kidding-me.mp3",
    },
  ],
  audio: "audio/pen15.mp3",
  img: "img/pen152.png",
};

const solidGround = {
  descriptions: [
    {
      text:
        ">  You find yourself standing in front of the Happiest Place on Earth. No, it’s not Disney World. It’s Solid Ground Cafe on Huntington Ave. \n> You enter and immediately crane your neck to try and see Lucia’s baby bump.",
      img: "img/solidground1.png",
    },
    {
      text:
        ">  But Keith is at the counter! What the heck!", // use \n character for new lines
      img: "img/solidground2.png",
    },
  ],
  question: "What do you ask for?",
  options: [
    {
      text: "> A… A large iced coffee with skim milk and extra caramel. ",
      leadsTo: null, // use null if no way forward
      message:
        "Lucia overhears you and becomes suspicious-- she knows the real Catu would ask for a large iced coffee with skim milk, caramel and extra caramel. Somethings not right here, so she has Keith kick you out. Try again.",
      audio: "audio/r-u-kidding-me.mp3",
    },
    {
      text: "> B… Ask for Lucia instead. ",
      leadsTo: "ryderHall", // name of next scene object
      message: "Order is restored! Keith will scare away too many customers with his RBF. He should stick to what he does best: egg sandwiches.",
      audio: "",
    },
  ],
  audio: "audio/solidground.mp3",
  img: "img/solidground1.png",
};

const stardew = {
  descriptions: [
    {
      text:
        ">  It’s the 24th of Spring. You stroll into town and wave hello to Mayor Lewis, Robin, and - oh look! Even Linus is enjoying the nice weather.\n> Today is the annual Flower Dance and you can’t wait to find yourself a dance partner. You enter the forest where the dance is taking place and...",
      img: "img/stardew1.png",
    },
    {
      text:
        "> Mayor Lewis: Oh God, why isn’t anyone dancing?! Everyone is being so awkward...\n> It’s up to you to save the Flower Dance and make the first move.",
      img: "img/stardew2.png",
    },
  ],
  question: "Who do you ask to dance?",
  options: [
    {
      text: "> A... Sebastian",
      leadsTo: "nathanForYou", // use null if no way forward
      message:
        "Right on. He understands you on an emotional level and will help you with your coding homework.",
      audio: "audio/not-compelte.mp3",
    },
    {
      text: "> B... Haley",
      leadsTo: "cabot", // name of next scene object
      message: "Good call. There really can only be one emotional ocean in this relationship.",
      audio: "audio/not-complete.mp3",
    },
  ],
  audio: "audio/stardew.mp3",
  img: "",
};

const prideAndPrejudice = {
  descriptions: [
    {
      text:
        ">  Rolling green hills. Misty skies. A stone gazebo offering refuge from the rain. Before you can stop yourself, your hand flexes and clenches into a tight fist. \n> You, but British: Blimey… it’s Pride and Prejudice 2005!",
      img: "",
    },
    {
      text:
        ">  After a long day of questing, you deserve to steep in some Victorian drama to take the edge off. \n> Everything is quiet in the countryside, though. A little too quiet...",
      img: "",
    },
  ],
  question: "Help get the story going. Which scandalous behavior do you partake in?",
  options: [
    {
      text: "> A… Let Mr. Darcy take your virginity and ruin your family",
      leadsTo: null, // use null if no way forward
      message:
        "Even though you are initially shunned from society, Darcy decides to make a decent woman of you and proposes. As we know \“It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.\” Too bad you have places to be! He will have to find a new love to replace the hole in his heart.",
      audio: "audio/not-complete.mp3",
    },
    {
      text: "> B… Engage Elizabeth in a battle of wits and end with the retort \“I could easily forgive your pride if you had not mortified mine\"",
      leadsTo: null,// name of next scene object
      message: "",
      audio: "audio/not-complete.mp3",
    },
  ],
  audio: "audio/pnp.mp3",
  img: "img/prideandpred.png",
};

export const scenes = {
  catusRoom,
  zachsCave,
  wrbb,
  dmv,
  jeffDavis,
  beaconHills,
  pen15,  
  solidGround, 
  stardew, 
  prideAndPrejudice
};

