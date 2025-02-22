const num = Number(process.argv[2]);
console.log(isNaN(num) ? "Please provide a valid number." : num % 2 === 0 ? "Even" : "Odd");
