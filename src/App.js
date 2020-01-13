import React, { useState, useEffect } from "react";

export default function App() {
  const [gamepad, setGamepad] = useState(null);
  useEffect(() => {
    console.log("listen");
    function connect(e) {
      console.log("connected", e);
      setGamepad(e.gamepad);
    }
    function disconnect(e) {
      console.log("disconnected", e);
      setGamepad(null);
    }
    window.addEventListener("gamepadconnected", connect);
    window.addEventListener("gamepaddisconnected", disconnect);
    return () => {
      window.removeEventListener("gamepadconnected", connect);
      window.removeEventListener("gamepaddisconnected", disconnect);
    };
  }, []);
  return (
    <>
      <h1>Hello world</h1>
      {JSON.stringify(gamepad)}
      {gamepad?.id}
    </>
  );
}
