import "./Header.css";
import { useState } from "react";

export default function Header({ children }) {
  // const [time, setTime] = useState(new Date());

  // setInterval(() => {
  //   setTime(new Date());
  // }, 1000)

  return (
    <header>
      {/* <span>{time.toLocaleTimeString()}</span> */}
      <h1>{children}</h1>
    </header>
  );
}
