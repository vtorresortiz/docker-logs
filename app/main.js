const rand = Math.random();
const main = async() => {
    let stop = false;
    let count = 1;
    while (true && !stop) {
        console.log(`{"event": "hello world", "rand": ${rand}, "count": ${count++}}`);
        await new Promise(r => setTimeout(r, 500));
    }
}

process.on('SIGTERM', () => {
    stop = true;
})

main();
