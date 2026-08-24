import { readFileSync } from "fs";

function isNum(ch: string): boolean {
  return ch >= "0" && ch <= "9";
}
const input = readFileSync("values.txt", "utf-8");
const arr: string[] = input.trim().split("\n");
let arrNumbers: number[] = [];
for (let i = 0; i < arr.length; i++) {
  let temp: string[] = [];
  for (let j = 0; j < arr[i].length; j++) {
    if (isNum(arr[i][j])) {
      temp.push(arr[i][j]);
    }
    if (arr[i].startsWith("one", j)) temp.push("1");
    if (arr[i].startsWith("two", j)) temp.push("2");
    if (arr[i].startsWith("three", j)) temp.push("3");
    if (arr[i].startsWith("four", j)) temp.push("4");
    if (arr[i].startsWith("five", j)) temp.push("5");
    if (arr[i].startsWith("six", j)) temp.push("6");
    if (arr[i].startsWith("seven", j)) temp.push("7");
    if (arr[i].startsWith("eight", j)) temp.push("8");
    if (arr[i].startsWith("nine", j)) temp.push("9");
  }
  if (temp.length > 1) {
    let lastElement = temp.at(-1);
    let result: string = temp[0] + lastElement;
    arrNumbers.push(Number(result));
  } else {
    let result: string = temp[0] + temp[0];
    arrNumbers.push(Number(result));
  }
}
let res: number = 0;
for (let i = 0; i < arrNumbers.length; i++) {
  res += arrNumbers[i];
}
console.log(res);
