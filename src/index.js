import { systemInfo } from './system.js';
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
    }
  });
  console.log(`You are currently in ${currentFolder}`);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on('line', async (line) => {
    const [command, ...args] = line
      .trim()
      .split(' ')
      .filter((val) => val !== '');
    switch (command) {
      case 'os':
        systemInfo(args);
        break;
      case 'up':
        break;
      case '.exit':
        rl.close();
        break;
      default:
        console.log('Please enter valid command...');
    }
  });
};

fileMan();
