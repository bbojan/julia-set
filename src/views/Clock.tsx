import { FC, memo, useState } from "react";
import { useOnRAFe } from "../hooks/useTime";

export const Clock: FC<{}> = memo(() => {
  const [text0, setText0] = useState("");
  const [text1, setText1] = useState("");

  useOnRAFe(() => {
    const parts = (document.title || "").split(",");
    setText0(parts[0] || "");
    setText1(parts[1] || "");
  });

  return (
    <div>
      <p>Drag the yellow circle</p>
      <header className="App-header">
        <p>Julia set</p>
        <p></p>
        <p>{text0}</p>
        <p>{text1}</p>
        <p></p>
      </header>
    </div>
  );
});
