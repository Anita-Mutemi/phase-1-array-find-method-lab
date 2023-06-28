// code your solution here
const record = [
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
  //...
];

function superbowlWin(record) {
  const winningYear = record.find((obj) => obj.result === "W");
  if (winningYear) {
    return "a win!";
  } else {
    return "sadly, undefined";
  }
}

const winningYear = superbowlWin(record);
console.log(winningYear);
