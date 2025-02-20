const questionsAndAnswers = [
  {
    question: 'Which of these abilities is the Basilisk Lizard known for?',
    options: ['It can walk on water', 'It can fly short distances', 'It can swim in freezing temperatures', 'It can change its skin color'],
    answer: 'It can walk on water',
    animal: 'basilisk lizard'
  },
  {
    question: 'The Capuchin Monkey is known for what behaviour?',
    options: ['Building nests in trees', 'Using stones to crack open nuts', 'Creating complex tools', 'Carrying food on their backs'],
    answer: 'Using stones to crack open nuts',
    animal: 'capuchin monkey'
  },
  {
    question: 'How fast can hummingbirds beat their wings?',
    options: ['35 beats per second', '45 beats per second', '60 beats per second', '75 beats per second'],
    answer: '75 beats per second',
    animal: 'hummingbird'
  },
  {
    question: 'What feature allows Red-Eyed Tree Frogs to defend against predators?',
    options: ['They can change colours', 'They are highly venomous', 'Their bright colours are confusing', 'They make loud, echoing sounds'],
    answer: 'Their bright colours are confusing',
    animal: 'red-eyed frog'
  },
  {
    question: 'What is the primary diet of a Costa Rican Jaguar?     ',
    options: ['Fruit and berries', 'Small mammals and deer', 'Insects and reptiles', 'Fish and amphibians'],
    answer: 'Small mammals and deer',
    animal: 'jaguar'
  },
  {
    question: 'Which Costa Rican beach is famous for being a nesting site for Green Turtles?',
    options: ['Tamarindo', 'Coco', 'Tortuguero', 'Manuel Antonio'],
    answer: 'Tortuguero',
    animal: 'turtle'
  },
  {
    question: 'How far away can a Howler Monkey\'s call be heard from?',
    options: ['1 mile', '2 miles', '3 miles', '4 miles'],
    answer: '3 miles',
    animal: 'howler monkey'
  },
  {
    question: 'Why do Sloths move so slowly?',
    options: ['They sleep 20 hours a day', 'They have a very low metabolic rate', 'They have long, heavy fur', 'They are preparing to migrate'],
    answer: 'They have a very low metabolic rate',
    animal: 'sloth'
  },
  {
    question: 'How do toucans communicate with each other?',
    options: ['Through songs and calls', 'By mimicking other animals', 'Through body movements', 'By changing the color of their beaks'],
    answer: 'Through songs and calls',
    animal: 'toucan'
  },
  {
    question: 'What extra thing does an iguana have?',
    options: ['A third eye', 'A fourth dimension', 'A fifth leg', 'A sixth sense'],
    answer: 'A third eye',
    animal: 'iguana'
  }
];

const resultAnimals = {
  excellent: {
    animal: 'jaguar',
    animalDescription: 'Your knowledge is as sharp as a jaguar\'s instincts — stealthy, precise, and worthy of ruling the Costa Rican jungle!',
    resultIntro: 'Top of the food chain!'
  },
  good: {
    animal: 'toucan',
    animalDescription: 'Bright and bold like a toucan, you\'ve got some solid knowledge. With a little more flair, you\'ll be soaring to the top!',
    resultIntro: 'Flying high!'
  },
  mid: {
    animal: 'capuchin monkey',
    animalDescription: 'Like a curious capuchin, you know a bit about Costa Rica, but there\'s still plenty more to discover.',
    resultIntro: 'You\'ve got some smarts, but you\'re still monkeying around!'
  },
  low: {
    animal: 'sloth',
    animalDescription: 'You may be iconic, but it\'s time to pick up the pace and learn more about Costa Rica!',
    resultIntro: 'Looks like your brain is moving in slo-mo today!'
  }
};



export { questionsAndAnswers, resultAnimals };