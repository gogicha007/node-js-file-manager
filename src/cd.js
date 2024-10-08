import path from 'path';
import fs from 'fs/promises';

export const cd = async (toPath, currFolder) => {
  let folder = toPath;
  if (!path.isAbsolute(toPath)) {
    folder = path.join(currFolder, toPath);
  }
  try {
    await fs.access(folder);
    process.chdir(folder);
    return folder;
  } catch {
    console.error('Please enter valid directory...');
    return currFolder;
  }
};
