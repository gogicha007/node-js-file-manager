const readline = require('readline');

const args = process.argv.slice(2);

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
