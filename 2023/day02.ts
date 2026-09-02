// 12 red , 13 green and 14 blue cubes

import { readFileSync } from "fs";

const data = readFileSync("data.txt", "utf-8");

const formattedData = data.trim().split("\n");

function splitData(formattedData: string[]): Array<Object> {
  const fixedArray: Object[] = [];
  for (let i = 0; i < formattedData.length; i++) {
    let newArr = formattedData[i].split(":");
    let newObject: any = {};
    let value = newArr[0].split(" ");
    let id = value[1];
    newObject.id = id;
    newObject.data = newArr[1];
    fixedArray.push(newObject);
  }
  return fixedArray;
}

type Condition = {
  red: number;
  green: number;
  blue: number;
};

function conditionChecking(result: Condition): boolean {
  if (result.red > 12) return false;
  if (result.green > 13) return false;
  if (result.blue > 14) return false;
  return true;
}

let result = splitData(formattedData);
function splitStrings(ArrayOfStrings: Object[]) {
  for (let i = 0; i < ArrayOfStrings.length; i++) {
    const newArr: string[] = ArrayOfStrings[i].data.split(/,|;/);
    // could've also done (/[,;]/) or even add third one like space (/[,; ]/) REGEX IS DOPE
    const result: Condition = { red: 0, green: 0, blue: 0 };
    for (let j = 0; j < newArr.length; j++) {
      let newElement = newArr[j].trim().split(/\s+/);
      if (newElement[1] === "red") {
        result.red = Math.max(result.red, Number(newElement[0]));
      } else if (newElement[1] === "green") {
        result.green = Math.max(result.green, Number(newElement[0]));
      } else {
        result.blue = Math.max(result.blue, Number(newElement[0]));
      }
    }

    ArrayOfStrings[i].feature = result;
  }
}
function finalChecking(ArrayOfStrings: Object[]): number {
  let result: number = 0;
  for (let i = 0; i < ArrayOfStrings.length; i++) {
    if (conditionChecking(ArrayOfStrings[i].feature))
      result = result + Number(ArrayOfStrings[i].id);
  }
  return result;
}
splitStrings(result);
const final = finalChecking(result);
console.log(final);
