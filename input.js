let connection; 

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
    if (key === "w") {
      connection.write("Move: up");
    } else if (key === "s") {
      connection.write("Move: down");
    } else if (key === "a") {
      connection.write("Move: left");
    } else if (key === "d") {
      connection.write("Move: right");
    }
  });
  stdin.on("data", (key) => {
    if (key === "g") {
      connection.write("Say: I'm the best around");
    } else if (key === "h") {
      connection.write("Say: Nothing's gonna ever keep me down");
    } else if (key === "j") {
      connection.write("Say: gonna keep me down");
    }
  });
  stdin.on("data", (key) => {
    if (key === "b") {
      connection.write("Say: What is this")
    } else if (key === "n") {
      connection.write("Say: a server for snakes?");
    }
  })
  return stdin;
};

module.exports = {setupInput};

