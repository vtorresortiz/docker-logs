const rand = Math.random();
const main = async() => {
    let stop = false;
    let count = 1;
    while (true && !stop) {
        const log = {"event": "hello world", rand, count};
        console.log(log);
        await new Promise(r => setTimeout(r, 500));
        count++;
    }
}

process.on('SIGTERM', () => {
    stop = true;
})

main();
