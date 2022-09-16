// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    // value: Number(prompt("Degrees celsius:")),
  };
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());

const temp1 = [17, 21, 23];
const temp2 = [12, 5, -5, 0, 4];
const temp3 = temp1.concat(temp2);

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days ... `;
  }
  console.log("... " + str);
};
printForecast(temp3);
