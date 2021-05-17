import axios from "axios";
import React from "react";

const JoinBlock = ({ onLogin }) => {
  const [roomId, setRoomId] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [isLoading, setLoading] = React.useState(false);

  const onEnter = async () => {
    if (!roomId || !username) {
      return alert("Введите");
    }
    setLoading(true);
    await axios
      .post("/rooms", {
        roomId,
        username,
      })
      .then(onLogin);
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
      <button
        disabled={isLoading}
        className="btn btn-success"
        onClick={onEnter}
      >
        {isLoading ? "ВХОД..." : "Войти"}
      </button>
    </div>
  );
};

export default JoinBlock;
