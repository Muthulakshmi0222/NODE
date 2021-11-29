const fs = require('fs');
//inbuilt package -- filesystem
fs.readFile("./welcome.txt", "utf-8", (err, data) => {
    console.log(data);
});

// const quote = "Attitute can kill by the true love";
// fs.writeFile("./awesome.txt", quote, (err) => {
//     console.log("Awesome writting");
// });

// const quote2 = "Live more , worry less ⭐";
// for (let i = 1; i <= 10; i++) {
//     fs.writeFile(`./backup/text-${i}.txt`, quote2, (err, data) => {
//         console.log("awesome",i);
//     });
// }


// const quote2 = "Live more , worry less ⭐";
// function createQuote(noOfFiles,quote) {
//     for (let i = 1; i < noOfFiles; i++) {
//         fs.writeFile(`./backup/text-${i}.txt`, quote, (err) => {
//             console.log("awesome",i);
//         });
//     }
// }
// const [ , , noOfFiles] = process.argv;
// createQuote(noOfFiles,quote2);

fs.readdir("./backup",(err , files)=>{
    if(err){
        console.log(err);
    }
    console.log(files);
});
