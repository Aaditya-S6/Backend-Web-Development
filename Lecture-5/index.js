const figlet = require("figlet");
const color = require('colors')
figlet("Hello Aaditya", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(color.rainbow(data));
});