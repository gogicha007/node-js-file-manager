import path from 'path';
import { readdir } from 'node:fs/promises';

export const ls = async (currentFolder) => {
  let folder = currentFolder;
  try {
    const files = await readdir(folder, { withFileTypes: true });
    const justFolders = files
      .filter((file) => file.isDirectory())
      .sort((a, b) => a.name.localeCompare(b.name));
    const justFiles = files
      .filter((file) => file.isFile())
      .sort((a, b) => a.name.localeCompare(b.name));

    const list = justFolders.concat(justFiles).reduce((acc, val, idx) => {
      acc.push({
        index: idx,
        name: val.name,
        type: val.isFile() ? 'file' : 'directory',
      });
      return acc;
    }, []);
    console.log(Object.keys(list[0]))
    console.log(list);
  } catch (err) {
    console.error(err);
  }
};
