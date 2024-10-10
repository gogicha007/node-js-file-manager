import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { stat } from 'node:fs/promises';
import { buildPath } from './helper.js';

export const compress = async (props, currentFolder) => {
  try {
    const srcFile = buildPath(props[0], currentFolder);
    const srcStats = await stat(srcFile);
    if (!srcStats.isFile()) throw new Error('Please enter valid file name...');
    let destFile;
    if (props[1]) {
      const destPath = buildPath(props[1], currentFolder);
      const destStats = await stat(destPath);
      if (!destStats.isDirectory())
        throw new Error('Please enter valid folder name...');
      destFile = path.join(destPath, `${path.basename(srcFile)}.gz`);
      // console.log('with second argument', destFile);
    } else {
      destFile = path.join(currentFolder, `${path.basename(srcFile)}.gz`);
      // console.log('no second argument', destFile);
    }
    await pipeline(
      fs.createReadStream(srcFile),
      zlib.createBrotliCompress(),
      fs.createWriteStream(destFile)
    );
  } catch (err) {
    console.error(err.message);
  } finally {
    console.log(`\nYou are currently in ${currentFolder}`);
  }
};

export const deCompress = async () => {
  try {
    console.log('decompress');
  } catch (err) {
    console.error(err.message);
  } finally {
    console.log(`\nYou are currently in ${currentFolder}`);
  }
};
