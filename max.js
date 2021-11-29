// console.log("max!!!");
// console.log(process.argv);

const [ , , nums] = process.argv;
const arr=JSON.parse(nums);
console.log(arr);
console.log(Math.max(...arr));