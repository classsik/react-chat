const express = require("express");

const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server, { cors: { origin: "*" } });

app.use(express.json());

const rooms = new Map();

app.get("/rooms", (req, res) => {
  res.send("Hello World!");
});

app.post("/rooms", (req, res) => {
  const { roomId, username } = req.body;
  if (!rooms.has(roomId)) {
    rooms.set(
      roomId,
      new Map([
        ["users", new Map()],
        ["messages", []],
      ])
    );
  }
  res.send();
});

io.on("connection", (socket) => {
  console.log(socket.id);
});

server.listen(8000, () => {
  console.log(`Example app listening at http://localhost:8000`);
});
