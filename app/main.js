let stop = false;
const main = async() => {
    while (true && !stop) {
        console.log(`{"event": "hello world", "rand": ${Math.random()}}`);
        await new Promise(r => setTimeout(r, 500));
    }
}

process.on('SIGTERM', () => {
    stop = true;
})

main();
