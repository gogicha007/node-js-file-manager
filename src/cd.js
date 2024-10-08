import path from 'path';
import { access } from 'node:fs/promises';

export const cd = async (toPath, currFolder) => {
  let folder = toPath;
  if (!path.isAbsolute(toPath)) {
    folder = path.join(currFolder, toPath);
  }
  try {
    await access(folder);
    process.chdir(folder);
    return folder;
  } catch {
    console.error('Please enter valid directory...');
    return currFolder;
  }
};
