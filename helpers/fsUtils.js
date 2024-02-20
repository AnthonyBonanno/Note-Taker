const fs = require('fs');
const util = require('util');

// Promise version of fs.readFile
const readFromFile = util.promisify(fs.readFile);
/**
 *  @param {string} file
 *  @param {object} content
 *  @returns {void}
 */
const writeToFile = (file, content) =>
  fs.writeFile(file, JSON.stringify(content), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${file}`)
  );
/**
 *  @param {object} content
 *  @param {string} filePath
 *  @returns {void}
 */
const readAndAppend = (content, filePath) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      writeToFile(filePath, parsedData);
    }
  });
};

module.exports = { readFromFile, writeToFile, readAndAppend };