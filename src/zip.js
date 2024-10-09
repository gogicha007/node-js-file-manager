export const compress = async () => {
  try {
    console.log('compress');
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
