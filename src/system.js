import os from 'os';

export function systemInfo(prop) {
  const arg = prop[0];
  switch (arg) {
    case '--EOL':
      console.log(JSON.stringify(os.EOL));
      break;
    case '--cpus':
      console.log(os.cpus().reduce((acc, val) => {
        acc.push({model: val.model, speed: val.speed})
        return acc
      }, []));
      break;
    case '--homedir':
      console.log(os.homedir());
      break;
    case '--username':
      console.log(os.userInfo().username);
      break;
    case '--architecture':
      console.log(os.arch());
      break;
    default:
      console.log(
        'Please enter valid command (e.g. --EOL, --cpus, --homedir, --username, --architecture)'
      );
  }
}
