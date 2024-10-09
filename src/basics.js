import path, { resolve } from 'node:path';
import { access, constants } from 'node:fs/promises';
import fs from 'node:fs';
import { stdout } from 'node:process';

export const cat = async (prop, currentFolder) => {
  try {
    const filePath = buildPath(prop, currentFolder);
    await access(filePath, constants.R_OK);
    const rs = fs.createReadStream(filePath);
    rs.on('data', (chunk)=> {
        stdout.write(chunk)
    })
    rs.on('end', ()=> {
        console.log(`\nYou are currently in ${currentFolder}`);
    })
  } catch (err) {
    console.error(err.message);
    console.log(`\nYou are currently in ${currentFolder}`);
  }
};
export const add = async (prop) => {
  console.log('add');
};
export const rn = async (prop) => {
  console.log('rn');
};
export const cp = async (prop) => {
  console.log('cp');
};
export const mv = async (prop) => {
  console.log('mv');
};
export const rm = async (prop) => {
  console.log('rm');
};

const buildPath = (argPath, currentFolder) => {
  let folder = argPath;
  if (!path.isAbsolute(argPath)) {
    folder = path.join(currentFolder, argPath);
  }
  return folder;
};
