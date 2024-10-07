import os from 'os';
import readline from 'readline';

const args = process.argv.slice(2);
let currentFolder = process.cwd();

const fileMan = async () => {
  args.forEach((val) => {
    if (val.includes('username')) {
      const string = val.split('=')[1];
      console.log(
        `Welcome to the File Manager, ${string ? string : 'Anonymous User'}!`
      );
      console.log(`You are currently in ${currentFolder}`);
    }
  });

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on('line', (line) => {
    const [command, ...args] = line
      .trim()
      .split(' ')
      .filter((val) => val !== '');
    console.log(command);
    console.log(args);
    switch (command) {
      case 'os':

      default:
        console.log('Please enter valid command...');
    }
  });
};

fileMan();
