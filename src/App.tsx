import { useState } from "react";
import { InteractiveClock } from "./InteractiveClock";

export default function App() {
  const [hour, setHour] = useState(3);
  const [minute, setMinute] = useState(15);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Time Learning Clock</h1>

      <InteractiveClock
        hour={hour}
        minute={minute}
        interactive={true}
        onTimeChange={(h, m) => {
          setHour(h);
          setMinute(m);
        }}
      />

      <h2 style={{ marginTop: "20px" }}>
        Selected Time: {hour}:{minute.toString().padStart(2, "0")}
      </h2>
    </div>
  );
}
