// SCENES
/*
      T - title
    /  \
   J   C  - jungle; city

 */

const SCENE_T1 = {
    text: "Hey, I'm Jerry the Giraffe! Want to go on an adventure?",
    options: {
      opt1: {
        text: "Sure!",
        next: SCENE_T2
      },
      opt2: {
        text: "No thanks.",
        next: EXIT_SCENE
      }
    },
    illustration: 'dummy-image.jpg'
  }

const SCENE_T2 = {
  text: "I'm at a fork in the road. One way leads to the jungle where I live, and the other way leads to the big city. Which way should we go?",
  options: {
    opt1: {
      text: "Jungle!",
      next: SCENE_J01
    },
    opt2: {
      text: "City!",
      next: SCENE_C01
    }
  },
  illustration: 'dummy-image.jpg'
}

//======= JUNGLE PATH =======//
const SCENE_J01 = {
  text: "We made it to the jungle! I see the path to my house weaving through the trees. Should we go home, or climb a tree?",
  options: {
    opt1: {
      text: "Let's go home.",
      next: SCENE_END01
    },
    opt2: {
      text: "Let's climb a tree!",
      next: SCENE_J02
    }
  }
}

//======= CITY PATH =======//
const SCENE_C01 = {
  text: "Wow, there's so much to see here in the city! Ooh, what's that on the ground? Something shiny...",
  options: {
    opt1: {
      text: "Pick it up!",
      next: SCENE_C02
    },
    opt2: {
      text: "Leave it alone.",
      next: SCENE_C02
    }
  }
}