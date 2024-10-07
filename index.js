import os from 'os';
import readline from 'readline';

const args = process.argv.slice(2);


const fileMan = async () => {
  args.forEach((val) => {
    if (val.includes('username')) {
      const string = val.split('=')[1];
      console.log(
        `Welcome to the File Manager, ${string ? string : 'Anonymous User'}!`
      );
    }
  });

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on('line', (line) => {
    const [command, ...args] = line.trim().split(' ');
    console.log(command);
    console.log(args);
  });
};

fileMan();
