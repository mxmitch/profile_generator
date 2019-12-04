const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let paragraph = {};
let paragraphFinal = "";


rl.question(`What's your name? Nicknames are also acceptable :)  `, (answer) => {
  paragraph.name = answer;
  rl.question(`What's an activity you like doing?  `, (answer) => {
    paragraph.activity = answer;
    rl.question(`What do you listen to while doing that?  `, (answer) => {
      paragraph.music = answer;
      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.)?  `, (answer) => {
        paragraph.favMeal = answer;
        rl.question(`What's your favourite thing to eat for that meal?  `, (answer) => {
          paragraph.favFood = answer;
          rl.question(`Which sport is your absolute favourite?  `, (answer) => {
            paragraph.favSport = answer;
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at!  `, (answer) => {
              paragraph.superpower = answer;
              paragraphFinal = `${paragraph.name} loves listening to ${paragraph.music} while ${paragraph.activity}, devouring ${paragraph.favFood} for ${paragraph.favMeal}, prefers ${paragraph.favSport} over any other sport, and is amazing at ${paragraph.superpower}.`;
              console.log(paragraphFinal);
              rl.close();
            });
          });
        });
      });
    });
  });
});