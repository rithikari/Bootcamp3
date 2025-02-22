const str = process.argv[2];
console.log(str ? str.split('').reverse().join('') : "Please provide a valid string.");
