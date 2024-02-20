// Exports a function that generates a string of random numbers and letters to be used for the IDs of saved notes
module.exports = () =>
  Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
