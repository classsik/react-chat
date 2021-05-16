import axios from "axios";
import React from "react";
import socket from "../socket";

const JoinBlock = () => {
  const [roomId, setRoomId] = React.useState("");
  const [username, setUsername] = React.useState("");

  const onEnter = () => {
    if (!roomId || !username) {
      return alert("Введите");
    }
    axios.post("/rooms", {
      roomId,
      username,
    });
  };

  return (
    <div className="join-block">
      <input
        type="text"
        placeholder="Room ID"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Ваше имя"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button className="btn btn-success" onClick={onEnter}>
        Войти
      </button>
    </div>
  );
};

export default JoinBlock;
