
//IMPORTANT: INSTALL IN TERMINAL npm i chalk@4.1.2

const readline = require('readline');
const chalk = require('chalk');
const { log } = require('console');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
});


let character = null;
let inventory = [];
let xp = 0;
let goldCoins = 0;

//art
const asciiArt = `
                                *~~
                                |~~
                        --_--_--__--_--
                        [   |     |   ]
                         |^ ^ ^ ^ ^ ^|
     *THE BLACK TOWER*   |   _____   |
      A text based       |    | |    |
      adventure game     |           |   Coded in Javascript
                         |    ___    |   by Zorroscoundrel
                         |    | |    |
                         |           |
                    _____|           |_____
   `
console.log(asciiArt);

console.log(chalk.blue.bgRed.bold('A new adventure awaits your three men party!\nThe charismatic Bard, the mysterious Mage and the mighty Barbarian! \nChoose one of them and use him wisely, good luck!\n'));

// Character selection
function selectCharacter() {
  let initialHP = 100; 
  rl.question('Choose your hero: (1) Bard, (2) Mage, (3) Barbarian ', (choice) => {
    switch (choice) {
      case '1':
        character = 'Franz the Bard';
        initialHP = 60;
        console.log('\n ---------------------------- \n" Use your intelligence to outsmart the enemies, not the best in fights, a jack of all trades."');
        break;
      case '2':
        character = 'Roland the Mage';
        initialHP = 40;
        console.log('\n ---------------------------- \n" Use the forbidden magic knowledge to win your fights but be aware of your constitution, mages are very weak."');
        break;
      case '3':
        character = 'Krall the Barbarian';
        initialHP = 120;
        console.log('\n ---------------------------- \n" Your fiery force can smash the strongest of the opponents, strong and durable indeed you are, not the best student I would say."');
        break;
      default:
        console.log('Invalid choice. Please select 1, 2, or 3.');
        selectCharacter();
        return; 
    }
    hp = initialHP;
    console.log(chalk.blue.bgYellowBright.bold(`\nYou've selected: ${character}! Your hero has ${hp} HP.`));
    console.log('\n ---------------------------- \n');
    startGame();
  });
}

selectCharacter();

function startGame() {
console.log(chalk.blue.bgRed.bold(`\n"I Chapter: The Swamps"`));
console.log('Your group is walking by an old path in the swamps, if full of fog and it is very humid.\nYou suddenly hear an horrific scream. What do you do?\n');
rl.question('1. Move towards the scream direction!\n2. Better to move away from the main road.\n', (choice) => {
    switch (choice) {
case '1':
        moveOverThere();
        break;
    case '2':
        takePath();
        break;
    // case '3':
    //     quitGame();
    //     break;
    default:
        console.log('Invalid choice. Please select 1, 2, or 3.');
        startGame();
        rl.close();
        break;
    }
});
}


// get to the Tower
function takePath () {
    console.log ('\n ---------------------------- \nYou take another trail in the swamps. You suddenly see a light in the distance. ');
rl.question ('1.Keep walking towards the light, time to explore!\n2.Better to rest now.You set the camp.The next morning you are ready to go', (choice) => {

  if (choice === '1') {
    console.log(chalk.blue.bgRed.bold(`\n"II Chapter: The Tower"`));

    console.log('You lead the group, walking slowly. In the distance you start to see what looks like an old stone tower.\nThe light comes from a candle at the top floor. Strange.');
    exploreTower();
  } else if (choice === '2') {
    takePath ();
  } else {
    console.log('Error');
    moveOverThere();
  }
});
}

//trollfight 2nd iteration
function moveOverThereNow() {
  console.log('\n ---------------------------- \nA putrid black Troll, 6 feet tall, runs towards your group!');
  console.log('What do you do?\n');
  if (character === 'Franz the Bard') {
    rl.question('1. Play a magic song with your flute\n2. Is just one troll, you can easily kill it with your blade!\n', (choice) => {
      if (choice === '1') {
        console.log('\n ---------------------------- \nYour calming country song makes the Troll movement really slow. The barbarian kills him in one perfect blow. Victory!\n');
        restByTroll();
      } else if (choice === '2') {
        const characterDamage = 30; 
        console.log(`\n ---------------------------- \nYou decide to attack the troll with your rapier. Even if the beast is huge, you manage to pierce is neck.`);
        console.log(`The horrendous animal falls down but in a last movement punches your back with his claws. You take ${characterDamage} damage.`);
        hp -= characterDamage; 
        if (hp <= 0) {
          console.log(`You have lost too much blood, you die. Game over.\n`);
          rl.close(); 
          quitGame()
        } else {
          console.log(chalk.blue.bgYellowBright.bold(`You have ${hp} HP left`));
          restByTroll(); // Continue the game after the fight
        }
      } else {
        console.log('Invalid choice. Please select 1 or 2.');
        moveOverThereNow();
      }
    });

  } else if (character === 'Roland the Mage') {
    rl.question('1. Cast a fireball\n2. Whistle and throw a stick at the Troll\n', (choice) => {

      if (choice === '1') {
        console.log('Your powerful fireball carbonizes the beast in a matter of seconds. \nA smell of cooked flesh comes at you. Well done!\n');
        restByTroll();
      } else if (choice === '2') {
        const characterDamage = 10; 
        console.log(`\n ---------------------------- \nYour stick falls in a puddle. The troll does not seem interested into playing now. He vomits a yellow liquid in your face, you take ${characterDamage} damage.`);
        hp -= characterDamage; 
        if (hp <= 0) {
          console.log(`You have lost too much blood, you die. Game over.\n`);
          rl.close(); 
        } else {
          console.log(chalk.blue.bgYellowBright.bold(`You have ${hp} HP left`));
          restByTroll(); // Continue the game after the fight
        }
      } else {
        console.log('Invalid choice. Please select 1 or 2.');
        moveOverThereNow();
      }
    });
  } else if (character === 'Krall the Barbarian') {
    rl.question('1. Time to use your axe\n2. Yell an insult at the Troll\n', (choice) => {
      if (choice === '1') {
        console.log('You start running towards the beast, screaming and swinging your ancestral axe.\nThe troll attacks you and injures your shoulder with his claws.\nYou roar like a lion and crush with all your body on him. The trolls fall down and you hit him at the neck, decapitating him and making his head roll away in the swamp. Victory!\n');
        restByTroll();
      } else if (choice === '2') {
        console.log('The beast does not understand a thing. Try again!\n ---------------------------- \n');
        moveOverThere();
      } else {
        console.log('Invalid choice. Please select 1 or 2.');
        exploreForest();
      }
    });
  }
}

//troll fight
function moveOverThere() {
  console.log('\n ---------------------------- \nThe three of you walk towards the scream, you suddenly notice a putrid black Troll, 6 feet tall.\nHe is gnawing what appears to be a dead deer.');
  console.log('What do you do?\n');

  if (character === 'Franz the Bard') {
    rl.question('1. Play a magic song with your flute\n2. Is just one troll, you can easily kill it with your blade!\n', (choice) => {
      if (choice === '1') {
        console.log('Your calming country song makes the Troll movement really slow. The barbarian kills him in one perfect blow. Victory!\n');
        restByTroll();
      } else if (choice === '2') {
        const characterDamage = 100; // Fixed -20 HP damage
        console.log(`\n ---------------------------- \nYou decide to attack the troll with your rapier. Even if the beast is huge, you manage to pierce is neck.`);
        console.log(`The horrendous animal falls down but in a last movement punches your back with his claws. You take ${characterDamage} damage.`);
        hp -= characterDamage; 
        if (hp <= 0) {
          console.log(`You have lost too much blood, you feel more and more weaker.. \n `)
          console.log(chalk.blue.bgRed.bold(`\n-----------[ YOU DIED ]-----------`));
          const asciiArt = `
            ____
           (     )
          | () () |
            ) ^ (
            |||||
            |||||`
console.log(asciiArt);
          quitGame()
          rl.close(); // You can implement additional game-over logic here
        } else {
          console.log(chalk.blue.bgYellowBright.bold(`You have ${hp} HP left`));
          restByTroll(); // Continue the game after the fight
        }
      } else {
        console.log('Invalid choice. Please select 1 or 2.');
        moveOverThereNow();
      }
    });
  } else if (character === 'Roland the Mage') {
    rl.question('1. Cast a fireball\n2. Convince the troll to go away\n', (choice) => {
      if (choice === '1') {
        console.log('\n ---------------------------- \nYour powerful fireball incinerates the beast. \nA smell of cooked flesh comes at you. Well done!\n');
        restByTroll();
      } else if (choice === '2') {
        console.log('\n ---------------------------- \nYou attempted to scream something at the troll but it looks it does not care.\nHe looks more angry. You should try something different!\n ---------------------------- \n');
        moveOverThere();
      } else {
        console.log('Invalid choice. Please select 1 or 2.');
        moveOverThere();
      }
    });
  } else if (character === 'Krall the Barbarian') {
    rl.question('1. Time to use your axe!\n2. Yell an insult at the Troll\n3. Deal with the beast with bear hands', (choice) => {
      if (choice === '1') {
        console.log('\n ---------------------------- \nYou start running towards the beast, screaming and swinging your ancestral axe.\nThe troll attacks you and injures your shoulder with his claws.\nYou roar like a lion and crush with all your body on him. The trolls fall down and you hit him at the neck, decapitating him and making his head roll away in the swamp. Victory!\n');
        restByTroll();
      } else if (choice === '2') {
        console.log('The beast does not understand a thing. Try again!\n ---------------------------- \n');
        moveOverThere();
      } else if (choice === '3') {
        const characterDamage = 50; // Fixed -20 HP damage
        console.log(`\n ---------------------------- \nYou decide to attack the troll with punches and kicks. You grab the monster leg and put him at the ground.\n After some seconds you succeed and crush the monster neck with your arms. At what cost! You take ${characterDamage} damage.`);
        hp -= characterDamage; 
        if (hp <= 0) {
          console.log(`You have lost too much blood, you die. Game over.\n`);
          rl.close(); // You can implement additional game-over logic here
        } else {
          console.log(chalk.blue.bgYellowBright.bold(`You have ${hp} HP left`));
          restByTroll(); // Continue the game after the fight
        }
      } else {
        console.log('Invalid choice. Please select 1 or 2.');
        exploreForest();
      }
    });
  }
}

//exploring the tower
let hasFoundSword = false;

function exploreTower() {
  console.log('\n----------------------------\nTower entrance. Something is wrong; the air is putrid, the smell is unbearable. The first floor is empty. You find two doors, one goes up, one goes down.');

  rl.question('1. Go upstairs\n2. Go downstairs.', (choice) => {
    if (choice === '1') {
      console.log('After slowly moving up the stairs, you find a wooden door. You can hear an old woman singing an unholy chant. It looks like she is cooking something.\n');
      faceWitch();
    } else if (choice === '2') {
      console.log('You have to light up a torch; some rats escape while you walk down the carved stairs.\nYou enter a small hall with a sarcophagus in the middle. A mighty knight is carved on it.\n----------------------------\n');
      if (!hasFoundSword) {
        rl.question('Do you want to open the tomb (y/n)?', (retryChoice) => {
          if (retryChoice.toLowerCase() === 'y') {
            console.log('All three of you try to open the tomb. Inside, there appear to be the skeletal remains of the knight.\nNot much is preserved, but a beautiful sword with a gold handle is found.');
            inventory.push('Ancient sword');
            const asciiArt = `
        
         ()________________________________
[00000000[]________________________________)
         ()                                                            
         
         `
            console.log(asciiArt);
            console.log(chalk.red(`Inventory: ${inventory.join(', ')}`));

            hasFoundSword = true;
            console.log('It looks like there is nothing useful here');
            rl.question('1. Go back at the main entrance', (nextChoice) => {
              if (nextChoice === '1') {
                exploreTower();
              } else {
                console.log('Invalid choice.');
                exploreTower();
              }
            });
          } else if (retryChoice.toLowerCase() === 'n') {
            console.log('You decide to leave the tower. Game over.');
            rl.close();
          } else {
            console.log('Invalid choice. Please select y or n.');
            exploreTower();
          }
        });
      } else {
        console.log('You enter the small hall, but you remember that you already took the sword from the tomb.');
        exploreTower();
      }
    } else {
      console.log('Invalid choice. Please select 1 or 2.');
      moveOverThere();
    }
  });
}
//loot the troll
function restByTroll() {
  console.log('\n *----------------------------* \n Loot time! \n *----------------------------* \n');
  rl.question('Do you want to loot? (y/n)', (choice) => {
    if (choice.toLowerCase() === 'y') {
      if (character === 'Franz the Bard') {
        console.log('\n ---------------------------- \nYou find a rusty spear head stuck in the Troll shoulder. Not much but better than nothing.');
        inventory.push('Rusty Spearhead');
        xp += 10;
        console.log(chalk.red(`Inventory: ${inventory.join(', ')}`));
        console.log(chalk.red(`XP: ${xp}`));
      }
      if (character === 'Krall the Barbarian') {
        console.log('\n ---------------------------- \nYou cut the chest open and eat the raw heart; that\'s how you absorb the strength of an enemy. \nAll the others look at you disgusted! You cut the Troll head and tie it to your belt.');
        xp += 10;
        console.log(chalk.red(`XP: ${xp}`));
        inventory.push('Troll head');
        console.log(chalk.red(`Inventory: ${inventory.join(', ')}`));
      }
      if (character === 'Roland the Mage') {
        console.log('\n ---------------------------- \nYou carve out the Troll eye; you heard it could be useful to cook strength potions.');
        inventory.push('Black Troll eye');
        xp += 10;
        console.log(chalk.red(`Inventory: ${inventory.join(', ')}`));
        console.log(chalk.red(`XP: ${xp}`));
      }
    } else {
      console.log('\n ---------------------------- \nYou choose not to loot');
    }
    takePath ();
  });
}

//witch fight
let chapterIntroDisplayed = false; // Initialize a flag

function faceWitch (){
  if (!chapterIntroDisplayed) {
    console.log(chalk.blue.bgRed.bold(`\n"III Chapter: The Witch"`));
    console.log('The witch stops to sing and stir the pot, looks at the party with mad eyes and says: " Who art thou? Who dares to enter my den? Trade me goods or face death!"');
    chapterIntroDisplayed = true; // Set the flag to true to indicate the intro has been displayed
  }
  if (character === 'Franz the Bard') {
    rl.question('1. You scream " for all the gods! What is THAT??\n2. "Ok, let s see who is the best at fencing!"\n', (choice) => {
      if (choice === '1') {
        console.log('\n----------------------------\nTowerThe witch looks where you are pointing, you manage to distract her and kick the pot!\nThe horrible liquid splashed into the witch and she starts to scream. She starts to liquify and what once was a Witch now is just a pile of bones and meat. Yuhuu!\n');
        xp += 30;
        console.log(chalk.red(`XP: ${xp}`));
        lootWitch();
      } else if (choice === '2') {
        const characterDamage = 10; 
        console.log(`\n ---------------------------- \nYou face the witch in a hand to hand combat, she pronounce something and a fire axe appears in front of her and starts swinging toward you. You take ${characterDamage} damage.`);
        hp -= characterDamage; 
        if (hp <= 0) {
          console.log(`You fool have lost too much blood, you die. Game over.\n`);
          rl.close(); 
          quitGame()
        } else {
          console.log(chalk.blue.bgYellowBright.bold(`You have ${hp} HP left`));
          faceWitch(); // Continue the game after the fight
        }
      } else {
        console.log('Invalid choice. Please select 1 or 2.');
        quitGame();
      }
    });
  } else if (character === 'Roland the Mage') {
    rl.question('1. Cast a fireball\n2. "Ok, take my magic book. Farewell" \n', (choice) => {
      if (choice === '1') {
        console.log('The fireball explodes the contents of the cauldron, the entire tower is swallowed by flames. The roof collapses. You wake up after a few hours. \nYour companions are dead, along with the witch. Fortunately, you survived!\n');
        xp += 30;
        console.log(chalk.red(`XP: ${xp}`));
        lootWitch();
      } else if (choice === '2') {
        const characterDamage = 30; 
        console.log(`\n ---------------------------- \n Bad idea, the witch does not seem pleased, she instead murmurs some words and you get hit by a lightning, you take ${characterDamage} damage.`);
        hp -= characterDamage; 
        if (hp <= 0) {
          console.log(`You have lost too much blood, you die. Game over.\n`);
          rl.close(); 
        } else {
          console.log(chalk.blue.bgYellowBright.bold(`You have ${hp} HP left`));
          faceWitch(); // Continue the game after the fight
        }
      } else {
        console.log('Invalid choice. Please select 1 or 2.');
        faceWitch();
      }
    });
  } else if (character === 'Krall the Barbarian') {
    rl.question('1.Ok, enough talking, I need to cut some heads now!\n2.Mmmh, the cauldron is just in front of you, kick it towards the witch\n', (choice) => {
      if (choice === '1') {
        console.log('You run at the witch invoking the protection of your tribe, she does not even time to say something that she gets slammed on the wall and her bones and guts crushed. well, that was too easy..!\n');
        lootWitch();
      } else if (choice === '2') {
        console.log('The beast does not understand a thing. Try again!\n ---------------------------- \n');
        lootWitch();
      } else {
        console.log('Invalid choice. Please select 1 or 2.');
        faceWitch();
      }
    });
  }
}

//loot the WITCH
function lootWitch() {
  console.log('\n *----------------------------* \n Loot time! \n *----------------------------* \n');
  rl.question('Do you want to loot? (y/n)', (choice) => {
    if (choice.toLowerCase() === 'y') {
      if (character === 'Franz the Bard') {
        console.log('\n ---------------------------- \n You look around in the witch lab, you find a nice red hat, it has fur on it and some feathers. Cool!');
        inventory.push('A very cool red hat');
        xp += 10;
        console.log(chalk.red(`Inventory: ${inventory.join(', ')}`));
        console.log(chalk.red(`XP: ${xp}`));
      }
      if (character === 'Krall the Barbarian') {
        console.log('\n ---------------------------- \nWell..you cut the chest open and eat the raw heart of the Witch. \n All the others look at you disgusted! You cut the Hag head and tie it to your belt.');
        xp += 10;
        console.log(chalk.red(`XP: ${xp}`));
        inventory.push('Hag head');
        console.log(chalk.red(`Inventory: ${inventory.join(', ')}`));
      }
      if (character === 'Roland the Mage') {
        console.log('\n ---------------------------- \nYou find an interesting book about Black Conjuration, it looks valuable.');
        inventory.push('Black magic conjuration book');
        xp += 10;
        console.log(chalk.red(`Inventory: ${inventory.join(', ')}`));
        console.log(chalk.red(`XP: ${xp}`));
      }
    } else {
      console.log('\n ---------------------------- \nYou choose not to loot');
    }
    quitGame ();
  });
}



function quitGame() {
  console.log('\n ---------------------------- \n Thanks for playing the Black Tower, a text adventure game by Zorro the Scoundrel!');
  rl.close();
}