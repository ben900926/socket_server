const { readFile, readFileSync, writeFile } = require('fs');
console.log("start");
readFile('./content/first.tt', 'utf-8',((err, result) => {
    if(err){
     console.log(err);
     return;   
    }
    const first = result;
    console.log("handling first file")
    
    // read second file
    readFile('./content/subdir/second.txt', {encoding:'utf-8'}, 
    ((err, result) =>{
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        console.log("handling second file");
        // write the file
        writeFile('./content/subdir/read_write_sync.txt',
        `What I wrote : ${first}, ${second}`,((err, result) => {
            if(err){
                console.log(err);
                return;
            }
            console.log(`The result: ${first} and ${second}`);
        }));

    }));
}));
console.log("Ready for the next task");

