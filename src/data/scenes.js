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
  question: "Choose a path.",
  options: [
    {
      text: "Left",
      leadsTo: "jeffDavis",
      message: "Good luck...",
      audio: "audio/laugh1.mp3",
    },
    {
      text: "Right",
      leadsTo: "wrbb",
      message: "Good luck...",
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
      audio: "audio/wannabe.mp3",
    },
    {
      text: "I Was Here by Beyoncé Knowles",
      leadsTo: "triwizard",
      message:
        "The hearts that you’ve touched will be the proof that you leave. ",
      audio: "audio/i-was-here.mp3",
    },
    {
      text: "Supermassive Black Hole by Muse",
      leadsTo: "forks",
      message: "Set those souls alight!",
      audio: "audio/supermassive-black-home.mp3",
    },
    {
      text: "Driver's License by Olivia Rodrigo",
      leadsTo: "dmv",
      message: "Red lights! Stop Signs!",
      audio: "audio/drivers-license.mp3",
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
      text: "2 and 4",
      leadsTo: "pen15", // use null if no way forward
      message:
        "Okay, law abiding biker!",
      audio: "audio/success.mp3",
    },
    {
      text: "These rules are better anyways. Thanks rift, no changes!",
      leadsTo: "goodwill", // name of next scene object
      message: "If you live long enough to bike again, you may regret this… ¯\_(ツ)_/¯",
      audio: "audio/success.mp3",
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
      message: "Nice try, you petty bitch. Pick again.",
      audio: "audio/r-u-kidding-me.mp3",
    },
    {
      text:
        "Knock on the door. Show him the world he could have created for Stiles and Derek with Tumblr fan edits. Help him get better.",
      leadsTo: "beaconHills",
      message: "Way to stick to what you believe in. You should ask him if he wants a pair of Sterek socks while you’re at it.",
      audio: "audio/success.mp3",
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
        "> You blink and you’re standing outside again, near a lacrosse field. It’s colder, and the moon is full. A howl pierces the air, and one of the players whips towards you, his red eyes piercing yours. Could this be… Beacon Hills?",
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
        "> Zach told you not to play God in other realms… maybe in order to save Scott you have to make things right.",
      img: "img/beaconhills1.png",
    },
  ],
  question: "How do you fix things in Beacon Hills?",
  options: [
    {
      text:
        "I’m sorry… Save Scott? Pass. Focus instead on finding out more about how Sterek got together. Maybe someone has video?",
      message: "On the one hand, you save Sterek. On the other, you doom humanity if this change ripples across the universe in a calamitous way. Tough call there, but maybe reconsider.",
      audio: "audio/r-u-kidding-me.mp3",
    },
    {
      text:
        "Track down Stiles and Derek so they can come help Scott face the Alphas. Then, find a way to break them up (probably by seducing Stiles). It’s the only way.",
      leadsTo: "ilMondo",
      message: "Don’t cry because it’s over, smile because it happened.",
      audio: "audio/success.mp3",
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
        "> You charge up the stairs, throw open the door to the boy’s bathroom, and there it is: the official UGIS census. But wait a minute...something’s not quite right. ", // use \n character for new lines
      img: "img/pen152.png",
    },
  ],
  question: "Who isn’t UGIS?",
  options: [
    {
      text: "Vision",
      message:
        "I’m sorry. Vision is UGIS. Try again.",
      audio: "audio/agh.mp3",
    },
    {
      text: "Adam Driver",
      message: "I’m sorry. Adam Driver is UGIS. Try again.",
      audio: "audio/agh.mp3",
    },
    {
      text: "Jungkook",
      leadsTo: "bike", // use null if no way forward
      message:
        "No one who would give up their own heart could ever be UGIS. #Junglin4ever",
      audio: "audio/success.mp3",
    },
    {
      text: "Catalina Berretta",
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
        "> You find yourself standing in front of the Happiest Place on Earth. No, it’s not Disney World. It’s Solid Ground Cafe on Huntington Ave. \n> You enter and immediately crane your neck to try and see Lucia’s baby bump.",
      img: "img/solidground1.png",
    },
    {
      text:
        "> But Keith is at the counter! What the heck!", // use \n character for new lines
      img: "img/solidground2.png",
    },
  ],
  question: "What do you ask for?",
  options: [
    {
      text: "A large iced coffee with skim milk and extra caramel. ",
      message:
        "Lucia overhears you and becomes suspicious-- she knows the real Catu would ask for a large iced coffee with skim milk, caramel and extra caramel. Somethings not right here, so she has Keith kick you out. Try again.",
      audio: "audio/r-u-kidding-me.mp3",
    },
    {
      text: "Ask for Lucia instead. ",
      leadsTo: "ryderHall", // name of next scene object
      message: "Order is restored! Keith will scare away too many customers with his RBF. He should stick to what he does best: egg sandwiches.",
      audio: "audio/success.mp3",
    },
  ],
  audio: "audio/solidground.mp3",
  img: "img/solidground1.png",
};

const stardew = {
  descriptions: [
    {
      text:
        "> It’s the 24th of Spring. You stroll into town and wave hello to Mayor Lewis, Robin, and - oh look! Even Linus is enjoying the nice weather.\n> Today is the annual Flower Dance and you can’t wait to find yourself a dance partner. You enter the forest where the dance is taking place and...",
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
      text: "Sebastian",
      leadsTo: "nathanForYou", // use null if no way forward
      message:
        "Right on. He understands you on an emotional level and will help you with your coding homework.",
      audio: "audio/not-compelte.mp3",
    },
    {
      text: "Haley",
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
        "> Rolling green hills. Misty skies. A stone gazebo offering refuge from the rain. Before you can stop yourself, your hand flexes and clenches into a tight fist. \n> You, but British: Blimey… it’s Pride and Prejudice 2005!",
      img: "",
    },
    {
      text:
        "> After a long day of questing, you deserve to steep in some Victorian drama to take the edge off. \n> Everything is quiet in the countryside, though. A little too quiet...",
      img: "",
    },
  ],
  question: "Help get the story going. Which scandalous behavior do you partake in?",
  options: [
    {
      text: "Let Mr. Darcy take your virginity and ruin your family",
      leadsTo: "attolia", // use null if no way forward
      message:
        "Even though you are initially shunned from society, Darcy decides to make a decent woman of you and proposes. As we know \“It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.\” Too bad you have places to be! He will have to find a new love to replace the hole in his heart.",
      audio: "audio/success.mp3",
    },
    {
      text: "Engage Elizabeth in a battle of wits and end with the retort \“I could easily forgive your pride if you had not mortified mine\"",
      leadsTo: "ilMondo",// name of next scene object
      message: "Elizabeth concedes in your battle. She tells you “For what do we live, but to make sport for our neighbors, and laugh at them in our turn?” She will now make more of an effort to forgive those around her.",
      audio: "audio/success.mp3",
    },
  ],
  audio: "audio/pnp.mp3",
  img: "img/prideandpred.png",
};

const forks = {
  descriptions: [
    {
      text:
        "> It is raining, and you hear thunder booming in the distance… or was that the sound of a baseball hitting a bat with superhuman force? \n> You: I must be in Forks!",
      img: "img/forks1.png",
    },
    {
      text:
        "> You see Bella’s red pickup parked in front of you. Inside, she’s drafting a pro-con list for Jacob and Edward.", // use \n character for new lines
      img: "img/forks2.png",
    },
  ],
  question: "Help Bella cast out this spell of indecision. Who should she pick?",
  options: [
    {
      text: "Team Edward. She’d never shed a tear that won’t be licked if you choose him.",
      leadsTo: "panamaAirport", // use null if no way forward
      message:
        "Nine words, baby: Breaking Dawn Part I Wedding, Rio and Honeymoon scenes.",
      audio: "audio/not-complete.mp3",
    },
    {
      text: "Team Jacob. Come on, loca! You know he’s the cuter one.",
      leadsTo: "triwizard", // name of next scene object
      message: "She won’t have to suffer through cold sex! Good pick!",
      audio: "audio/loca-twilight.mp3",
    },
    {
      text: "Team Mike. Since when is it a crime to be human?",
      leadsTo: "youDie", // name of next scene object
      message: "You deserve this.",
      audio: "audio/shes-dead.mp3",
    },
  ],
  audio: "audio/forks.mp3",
  img: "",
};

const panamaAirport = {
  descriptions: [
    {
      text:
        ">  You look around and you’re in an airport terminal. The air is so hot and humid it’s sticky, and there’s a faint scent of cheese fries. But something about these windows looks familiar… ",
      img: "",
    },
    {
      text:
        ">  You: Tocumen International Airport! I must be in Panama. I almost didn’t recognize it at this temperature.", // use \n character for new lines
      img: "",
    },
  ],
  question: "Looks like the rift broke the AC. What’s your move?",
  options: [
    {
      text: "Fix the thermostat and set it to where it was before (10° C). ",
      leadsTo: "hillside", // use null if no way forward
      message:
        "The condensation will be back in no time. Hop on a Copa flight and continue on.",
      audio: "audio/success.mp3",
    },
    {
      text: "Fix the thermostat but set it to 23° C. Be the change you want to see in the world.",
      leadsTo: "seven11", // name of next scene object
      message: "Sure you changed the fundamental structure of the universe, but in an eco-conscious way. God turns a blind eye.",
      audio: "audio/success.mp3",
    },
  ],
  audio: "audio/airport.mp3",
  img: "img/panama.png",
};

const facebook = {
  descriptions: [
    {
      text:
        ">  You no longer have a physical form, like the dad in Interstellar. All you know is that you can feel a profound sense of… remorse? Cringe? Nostalgia? What’s stirring this up?",
      img: "",
    },
    {
      text:
        ">  Looks like you’re now in an Instagram server, in the heart of the Catu data trove (years 2013 - 2015). In every direction you look you see posts with overexposed filters and too many hashtags.", // use \n character for new lines
      img: "",
    },
  ],
  question: "Let’s cleanse the timeline. Which Instagram caption isn’t yours?",
  options: [
    {
      text: "\"Laughing externally, screaming internally. #spotthecoffeestain\"",
      leadsTo: "dunks", // use null if no way forward
      message:
        "Nice memory! That was indeed not your caption, but actually a caption by Instagram user @glennjamin_franklin from September 2015.",
      audio: "audio/success.mp3",
    },
    {
      text: "\"#topshop #notactualpurchases #reunion #missedyou #woolyhats woo\"",
      message: "I hate to break it to you but this caption was published by you in June 2013. You can never escape the #woolyhats. Try again.",
      audio: "audio/sad-trombone.mp3",
    },
    {
      text: "\"How to: #narcissism 101 #painting #selfportrait\"",
      message:
        "Wrong! That #selfportrait was indeed posted by you in February 2014. Try again.",
      audio: "audio/sad-trombone.mp3",
    },
    {
      text: "\"good friends support you (: #friends #balance\"",
      leadsTo: "cabot",
      message: "Correct! That was indeed not your caption, but actually a caption by Instagram user @oriannakane from September 2013.",
      audio: "audio/success.mp3",
    },
  ],
  audio: "audio/facebook.mp3",
  img: "img/facebook.png",
};

const goodwill = {
  descriptions: [
    {
      text:
        "> A large, windowless room. A grandma smell. A fuckton of clothes, waiting to be given a higher purpose. \n> You: Ah, sweet Goodwill. I’ve missed you, friend.",
      img: "img/goodwill.png",
    },
  ],
  question: "Forget the rift-- what do you buy to fix the hole in your wardrobe?",
  options: [
    {
      text: "High waisted black jeans",
      leadsTo: "solidGround", // use null if no way forward
      message:
        "Imagine the Monday possibilities… ",
      audio: "audio/success.mp3",
    },
    {
      text: "Something brown",
      message: "Okay, Bella Swan. Enough is enough.",
      audio: "audio/sad-trombone.mp3",
    },
    {
      text: "A humorous mug",
      leadsTo: "seven11", // name of next scene object
      message: "Just different enough from the 20 you have at home! Great choice.",
      audio: "audio/success.mp3",
    },
    {
      text: "Something structured and form fitting",
      message: "Your mom would be proud! Unfortunately, Goodwill does not currently carry this item. Try again.",
      audio: "audio/sad-trombone.mp3",
    },
  ],
  audio: "audio/goodwill.mp3",
  img: "img/goodwill.png",
};

const dunks = {
  descriptions: [
    {
      text:
        ">  The aroma of roasting coffee beans and sugar fills your nose. Your mouth immediately fills with saliva as the overwhelming desire to drink iced caramel coffee from Dunks consumes you. This fixing rifts business has made you thirsty. Pop in for a mid-quest treat.",
      img: "",
    },
    {
      text:
        ">  You: Ah, Dunkin Donuts. Downstairs just cannot compare.", // use \n character for new lines
      img: "",
    },
  ],
  question: "You didn’t bring your wallet into the void :( Who do you ask to spot you?",
  options: [
    {
      text: "Papa B.",
      leadsTo: "nathanForYou", // use null if no way forward
      message:
        "He always has your back",
      audio: "audio/taking-a-break.mp3",
    },
    {
      text: "Oreo",
      leadsTo: "youDie", // name of next scene object
      message: "You die of thirst! She would never help you purchase such disgusting coffee!",
      audio: "audio/shes-dead.mp3",
    },
  ],
  audio: "audio/dunks.mp3",
  img: "img/dunks.png",
};

const seven11 = {
  descriptions: [
    {
      text:
        "> You shade your eyes against the blinding white LEDs. The dirty tile floor and small aisles tell you where you are. But wait-- wall to wall, floor to ceiling, all the colorful packaging of mankind’s greatest culinary achievements are gone! And in their place… food fit for a raw ‘til 4 vegan.",
      img: "",
    },
    {
      text:
        "> You: 7/11! What have they done to you!", // use \n character for new lines
      img: "",
    },
  ],
  question: "Help the owners invest in some quality products. Which product will you recommend?",
  options: [
    {
      text: "Kit Kat Drumstick Ice Creams",
      leadsTo: "fantasySuite", // use null if no way forward
      message:
        "Excellent choice! Stoners start to re-populate their natural habitat, and soon the ecosystem is fully restored: Half Baked and Spicy Hot Cheetos stretching as far as the eye can see. Mission Hill residents rejoice and the 7/11 looks like it will be able to thrive in this reality for years to come.",
      audio: "audio/success.mp3",
    },
    {
      text: "Takis Tostinos Pizza Bites",
      message: "Management agrees, and they even try a few themselves. But the bites aren’t good enough to convince the owners to ditch the ‘veg and return the snack business.Try again.",
      audio: "audio/sad-trombone.mp3",
    },
  ],
  audio: "audio/711.mp3",
  img: "img/7_11.png",
};

const ilMondo = {
  descriptions: [
    {
      text:
        "> Cheese, garlic, and the warm smell of bread hits your nose. You see Glenn and Felicia arguing at the counter. \n> You: Il Mondo must only have one slice of cheese pizza left! What a horrible AU!",
      img: "",
    },
  ],
  question: "Who gets the slice?",
  options: [
    {
      text: "Glenn",
      message:
        "Glenn is trying to be vegan. How could you tempt her so!? Try again.",
      audio: "audio/r-u-kidding-me.mp3",
    },
    {
      text: "Felicia",
      leadsTo: "stardew", // name of next scene object
      message: "Glenn is trying to be vegan and you are helping her to walk the virtuous path. This reality is repaired!",
      audio: "audio/success.mp3",
    },
  ],
  audio: "audio/ilmondo.mp3",
  img: "img/ilmondo.png",
};

const attolia = {
  descriptions: [
    {
      text:
        "> You’re in a musty dungeon with a beautiful woman, a shorter, more beautiful man, and a pack of guards. \n> A hand falls to the floor. Oh gods… Welcome to Attolia.",
      img: "img/attolia1.png",
    },
    {
      text:
        "> The doctor comes to attend to Gen, and he tosses you the spare hand on his way out.", // use \n character for new lines
      img: "img/attolia2.png",
    },
  ],
  question: "Megan didn’t say anything about this! Now what? ",
  options: [
    {
      text: "Find a doctor to re-attach it.",
      message:
        "And risk offending the gods!? Reconsider before it’s too late.",
      audio: "audio/",
    },
    {
      text: "Cook it. Ask Gen if he would like to try a bite.",
      leadsTo: "facebook", // name of next scene object
      message: "Beef. Pork. Chicken. Hand!",
      audio: "audio/success.mp3",
    },
  ],
  audio: "audio/attolia.mp3",
  img: "",
};


const triwizard = {
  descriptions: [
    {
      text:
        "THUNK! You slam into the ground holding...holding…..Merlin’s Beard! It’s Cedric Diggory’s dead body! Freshly Avada Kedavra’d by The Dark Lord himself.",
      img: "img/tw1.png",
    },
    {
      text:
        "Amos Diggory falls to his knees beside you. He’s so upset that he’s at a loss for words.", // use \n character for new lines
      img: "img/tw2.png",
    },
  ],
  question: "Help Amos decide what to say next.",
  options: [
    {
      text: "\"rip\"",
      message:
        "Umm, his son just died? You call that cinema? Try again. This time with a little more emotion.",
      audio: "audio/sad-trombone.mp3",
    },
    {
      text: "\"THAT’S MY BOYYYYY!!!!!!!\"",
      leadsTo: "bike", // name of next scene object
      message: "Well put!",
      audio: "audio/thats-my-boy.mp3",
    },
  ],
  audio: "audio/twt.mp3",
  img: "",
};


const hillside = {
  descriptions: [
    {
      text:
        "> What the heck! You’re home! \n> You: Something doesn’t seem right though… better look around and make sure there’s no sign of the tear here. Maybe I’ll start by looking in Horizon Zero Dawn…just to be safe.",
      img: "img/166.png",
    },
  ],
  question: "Look around the kitchen. What's wrong?",
  options: [
    {
      text: "The back door is unlocked. How unsafe!",
      message:
        "Sure… the “rift” left it unlocked… Try again. ",
      audio: "audio/agh.mp3",
    },
    {
      text: "Not a mouse trap to be seen! Better set out some fresh ones.",
      message:
        "Leave him alone!",
      audio: "audio/agh.mp3",
    },
    {
      text: "It’s your week to unload the dishwasher, and I’ll be damned, it’s empty! Try putting some of the clean dishes back in.",
      leadsTo: "fantasySuite", // name of next scene object
      message: "Good catch! Homeostasis achieved. ",
      audio: "audio/laugh1.mp3",
    },
  ],
  audio: "audio/166.mp3",
  img: "img/166.png",
};


const ryderHall = {
  descriptions: [
    {
      text:
        "> Hmm, smells like paint, brick, and...Subway? In the far distance you hear light piano playing and someone gushing about Helvetica. \n> You must be in Ryder Hall! And oh god, you’re late for Interaction Design II...You leap up the spiral staircase to the 3rd floor and enter your classroom.",
      img: "img/ryder1.png",
    },
    {
      text:
        "> You: I’m so sorry I’m late! You won’t believe the day I’ve had repairing all the rifts in the spaceti--", // use \n character for new lines
      img: "img/ryder1.png",
    },
    {
      text:
        "> Professor: That sounds nice, Catu. We’re actually in the middle of a quiz...", // use \n character for new lines
      img: "img/ryder2.png",
    },
  ],
  question: "Select the design that is most correct",
  options: [
    {
      text: "Left design",
      leadsTo: "fantasySuite", // use null if no way forward
      message:
        "Congratulations! Your design degree didn’t go to waste after all. Make sure to put “patching up the delicate fabric of time and space” on your resume.",
      audio: "audio/new-passion-talent.mp3",
    },
    {
      text: "Right design",
      message: "Yikes, you didn’t notice the difference in title tracking? You’re lucky John Kane wasn't here to witness that. Try again.",
      audio: "audio/r-u-kidding-me.mp3",
    },
  ],
  audio: "audio/mii.mp3",
  img: "",
};


const cabot = {
  descriptions: [
    {
      text:
        ">  Red shirts. Long lines. \n>  God damnit. You’re in Cabot.",
      img: "",
    },
    {
      text:
        ">  You: Test day waits for no man, space time rift or not. Let’s get that C.", // use \n character for new lines
      img: "",
    },
  ],
  question: "You’re 3 hours late and they won’t let you in. How do you get through so you can continue your quest?",
  options: [
    {
      text: "Threaten to expose their inadequate COVID procedures to the Huntington News.",
      leadsTo: "nathanForYou", // use null if no way forward
      message:
        "That'll show 'em",
      audio: "audio/success.mp3",
    },
    {
      text: "Meh… just come back tomorrow.",
      message: "#ProtectThePack man!",
      audio: "audio/sad-trombone.mp3",
    },
  ],
  audio: "audio/mii.mp3",
  img: "img/cabot.png",
};


const bike = {
  descriptions: [
    {
      text:
        ">  God, just look at him -- a stallion. Why, it’s none other than Sounis of course. \n> Though...a part of you will never be able to escape the PTSD from those cursed winter morning Iditarod rides.",
      img: "",
    },
    {
      text:
        "> Nevertheless, you must mount Sounis and continue your tumultuous journey. \n> There are three routes in front of you. Which one will lead you to the glory of saving the multiverse?", // use \n character for new lines
      img: "",
    },
  ],
  question: "Which way do you go?",
  options: [
    {
      text: "The Esplanade",
      leadsTo: "hillside", // use null if no way forward
      message:
        "A classic. You ride into the sunset with no hands to flex on all the children and geese.",
      audio: "audio/success.mp3",
    },
    {
      text: "To the bike shop in Cambridge",
      leadsTo: "ryderHall", // name of next scene object
      message: "Heh good choice. Now go get that cute guy’s number.",
      audio: "audio/success.mp3",
    },
    {
      text: "Towards an oddly wide road that curves out of view",
      message: "Bro, you just rode your bike onto the frickin freeway. Get the hell out of there and choose again.",
      audio: "audio/sad-trombone.mp3",
    },
  ],
  audio: "audio/sounis.mp3",
  img: "img/sounis.png",
};


const nathanForYou = {
  descriptions: [
    {
      text:
        "> You’re in East Hollywood and could really go for some coffee after all the universe-saving you’ve been doing. Luckily, you spot a Starbucks. \n > As you get closer, you realize the store sign actually says “Dumb Starbucks”....well, you’re here now. Might as well check it out.",
      img: "img/n4u1.png",
    },
    {
      text:
        "> You’re immediately greeted by world-renowned-businessman-turned-barista Nathan Fielder. He gives you a painfully awkward full-teeth smile. \n> Nathan: Welcome to Dumb Starbucks! How can I help you?", // use \n character for new lines
      img: "img/n4u2.png",
    },
  ],
  question: "What's the move?",
  options: [
    {
      text: "Ask Nathan for help with your quest. After all, he did graduate from one of Canada’s top business schools with really good grades.",
      leadsTo: "finalScene", // use null if no way forward
      message:
        "The plan? Ask exorcist Carlos Oliveira to help you navigate through the spiritual world to get back home. ",
      audio: "audio/come-out.mp3",
    },
    {
      text: "Order a pumpkin spice latte",
      message: "You’re not going to ask the inventor of the Soundproof Sex Box for Parents for help? Are you sure?",
      audio: "audio/sad-trombone.mp3",
    },
  ],
  audio: "audio/nathan.mp3",
  img: "",
};


const fantasySuite = {
  descriptions: [
    {
      text:
        ">  Roses. Everywhere. On the floor. On the table. On the heart shaped bed you’re lying on. Wait...the heart shaped bed?!",
      img: "img/fsuites1.png",
    },
    {
      text:
        ">  You whip your head to your left and see Matt James curled up next to you, gazing lovingly into your eyes. The candlelit fantasy suite you’re in screams romance and you can’t believe you’ve made it this far on The Bachelor. ", 
      img: "",
    },
    {
      text:
        "> Matt: When I'm with you, it just feels right. I look at you and see someone that I could spend the rest of my life with. \n> You: Uh…. \n> Matt: I like that. Thank you for being so vulnerable with me.",
      img: "",
    },
    {
      text:
        "> Matt: It’s only right that I share my heart with you. Catu…I’m..I’m falling in love with you.", 
      img: "",
    },
  ],
  question: "What do you do?",
  options: [
    {
      text: "Run",
      leadsTo: "finalScene", // use null if no way forward
      message:
        "Well that’s one way of doing it… looks like you ran out of there so fast you made it back to your dimension. Nice work! ",
      audio: "audio/success.mp3",
    },
    {
      text: "Tell Matt you're falling for him too.",
      leadsTo: "youDie", // name of next scene object
      message: "You’ve lost the right to play this game. Powering down.",
      audio: "audio/shes-dead.mp3",
    },
  ],
  audio: "audio/fantasysuites.mp3",
  img: "img/fsuites2.png",
};

const finalScene = {
  descriptions: [
    {
      text:
        ">  You look down and feel the soft green fabric of the blanket you are wrapped in. In front of you stands a tree with small twinkling lights. Slightly to your left, your friend, Box. Behind you, your other friends: Caitlin, Oreo, Glenn, and Felicia.",
      img: "",
    },
    {
      text:
        ">  You: I’m home! Did I do it?", // use \n character for new lines
      img: "",
    },
  ],
  question: "How do you celebrate?",
  options: [
    {
      text: "Tear down the curtains so Ymer won’t be able to climb them.",
      message:
        "You begin to relax, sprawled on the coach, “a little stoned”, in front of Box. Nothing has ever felt more right, and you know deep in your heart, the rift has been repaired.",
      audio: "audio/thank-you-all.mp3",
    },
    {
      text: "Grab a joint just to get \"a little high.\".",
      message:
        "You begin to relax, sprawled on the coach, “a little stoned”, in front of Box. Nothing has ever felt more right, and you know deep in your heart, the rift has been repaired.",
      audio: "audio/thank-you-all.mp3",
    },
  ],
  audio: "audio/hallelujia.mp3",
  img: "img/hbd.png",
};

const youDie = {
  descriptions: [
    {
      text:
        "RIP. You failed to stabilize the multiverse. How could you dissapoint Zach like this?? \nGAME OVER",
      img: "",
    },
  ],
  audio: "audio/game-over.mp3",
  img: "img/rip.png",
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
  prideAndPrejudice, 
  forks, 
  panamaAirport, 
  facebook, 
  goodwill, 
  dunks, 
  seven11, 
  ilMondo, 
  attolia, 
  hillside, 
  ryderHall, 
  bike, 
  nathanForYou, 
  fantasySuite, 
  finalScene, 
  youDie, 
  triwizard, 
  cabot
};

