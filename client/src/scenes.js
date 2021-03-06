export const SCENE_T1 = {
    text: "Hi, I'm Jerry the Giraffe! Want to go on an adventure?",
    options: [
      {
        text: "Sure!",
        next: "SCENE_T2"
      },
      {
        text: "No thanks.",
        next: 'SCENE_WHY'
      }
    ],
    illustration: 'https://s3-us-west-2.amazonaws.com/fec-brox/images/jerry.png'
  }

export const SCENE_T2 = {
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
  illustration: 'https://s3-us-west-2.amazonaws.com/fec-brox/images/sign.png'
}

export const SCENE_WHY = {
  text: "",
  options: [
    {
      text: "Start over",
      next: "SCENE_T1"
    }
  ],
  illustration: 'https://media.giphy.com/media/IhWQ8Uw1JOQgM/giphy.gif'
}

//======= JUNGLE PATH =======//
export const SCENE_J01 = {
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
  ],
  illustration: 'https://s3-us-west-2.amazonaws.com/fec-brox/images/jungle.png'
}

export const SCENE_J02 = {
  text: "Wow, we're way up in the treetops now! What a view. Oh look, there's a jungle bird out on that branch. Should we make friends, or climb back down and head home?",
  options: [
    {
      text: "Let's go home.",
      next: "SCENE_END01"
    },
    {
      text: "Let's make friends!",
      next: "SCENE_END02"
    }
  ],
  illustration: 'https://s3-us-west-2.amazonaws.com/fec-brox/images/bird.png'
}

//======= CITY PATH =======//
export const SCENE_C01 = {
  text: "Wow, there's so much to see here in the city! Ooh, what's that on the ground? Something shiny...",
  options: [
    {
      text: "Pick it up!",
      next: "SCENE_C02",
      item: "key"
    },
    {
      text: "Leave it alone.",
      next: "SCENE_C02"
    }
  ],
  illustration: 'https://s3-us-west-2.amazonaws.com/fec-brox/images/key.png'
}

export const SCENE_C02 = {
  text: "Whoa, this big metal building looks interesting. Wonder what's inside... looks like the door is locked. What should we do?",
  options: [
    {
      text: "Try the key we found!",
      next: "SCENE_C03",
      condition: "key"
    },
    {
      text: "Look for a different door.",
      next: "SCENE_C04"
    }
  ],
  illustration: 'http://s3-us-west-2.amazonaws.com/fec-brox/images/door.png'
}

export const SCENE_C03 = {
  text: "Oh. My. Gibbon. It's a space station! There's a rocket getting ready to take off! What should we do?",
  options: [
    {
      text: "Climb aboard!",
      next: "SCENE_END03"
    },
    {
      text: "We better head home.",
      next: "SCENE_END01"
    }
  ],
  illustration: 'https://s3-us-west-2.amazonaws.com/fec-brox/images/rocket.png'
}

export const SCENE_C04 = {
  text: "Hey, I found an unlocked door around the back of the building! Should we go in?",
  options: [
    {
      text: "Yes, let's go inside!",
      next: "SCENE_C03"
    },
    {
      text: "No, we should go home.",
      next: "SCENE_END01"
    }
  ],
  illustration: 'http://s3-us-west-2.amazonaws.com/fec-brox/images/door2.png'
}

//======= ENDINGS =======//

export const SCENE_END01 = {
  text: "We made it back home. That was a fun trip--thanks for joining me!",
  options: [
    {
      text: 'Start another adventure',
      next: 'SCENE_T1'
    }
  ],
  illustration: 'https://s3-us-west-2.amazonaws.com/fec-brox/images/jerry-family.png'
};

export const SCENE_END02 = {
  text: "What a great day! We made a new friend. Let's have tea together and watch the sun set.",
  options: [
    {
      text: 'Start another adventure',
      next: 'SCENE_T1'
    }
  ],
  illustration: 'http://s3-us-west-2.amazonaws.com/fec-brox/images/tea-party.png'
};

export const SCENE_END03 = {
  text: "FIRST GIRAFFE ON THE MOON! This was the best day ever. One small step for this giraffe, one giant leap for giraffekind! Thanks for joining me on this amazing adventure, friend!",
  options: [
    {
      text: 'Start another adventure',
      next: 'SCENE_T1'
    }
  ],
  illustration: 'http://s3-us-west-2.amazonaws.com/fec-brox/images/moon.png'
};