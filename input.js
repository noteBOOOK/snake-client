let connection; 
const {IP, PORT, chatLog, movement} = require("./constants")

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  stdin.on("data", (key) => {
    if (key === "\u0003") {
      process.exit();
    };
  });
  stdin.on("data", (key) => {
    if (key in movement) {
      connection.write(movement[key]);
    };
  });
  stdin.on("data", (key) => {
    if (key in chatLog) {
      connection.write(chatLog[key]);
    }
  })
  return stdin;
};

module.exports = {setupInput};

