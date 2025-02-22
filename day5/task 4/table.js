const num = Number(process.argv[2]);
if (isNaN(num)) {
    console.log("Please provide a valid number.");
} else {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}
