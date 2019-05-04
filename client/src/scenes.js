// SCENES
/*
      T - title
    /  \
   J   C  - jungle; city

 */

export var SCENE_T1 = {
    text: "Hey, I'm Jerry the Giraffe! Want to go on an adventure?",
    options: [
      {
        text: "Sure!",
        next: "SCENE_T2"
      },
      {
        text: "No thanks.",
        next: '' //EXIT_SCENE
      }
    ],
    illustration: 'dummy-image.jpg'
  }

export var SCENE_T2 = {
  text: "I'm at a fork in the road. One way leads to the jungle where I live, and the other way leads to the big city. Which way should we go?",
  options:[
    {
      text: "Jungle!",
      next: "SCENE_J01"
    },
    {
      text: "City!",
      next: "SCENE_C01"
    }
  ],
  illustration: 'dummy-image.jpg'
}

//======= JUNGLE PATH =======//
export var SCENE_J01 = {
  text: "We made it to the jungle! I see the path to my house weaving through the trees. Should we go home, or climb a tree?",
  options: [
    {
      text: "Let's go home.",
      next: "SCENE_END01"
    },
    {
      text: "Let's climb a tree!",
      next: "SCENE_J02"
    }
  ]
}

//======= CITY PATH =======//
export var SCENE_C01 = {
  text: "Wow, there's so much to see here in the city! Ooh, what's that on the ground? Something shiny...",
  options: [
    {
      text: "Pick it up!",
      next: "SCENE_C02"
    },
    {
      text: "Leave it alone.",
      next: "SCENE_C02"
    }
  ]
}