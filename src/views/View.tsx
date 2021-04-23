import { FC, useMemo, useState } from "react";
import { Canvas } from "./Canvas";
import { useInterval } from "./useCanvas";

export const View: FC<{}> = () => {
  const [count, setCount] = useState(0);

  useInterval(1, () => {
    setCount((c) => c + 1);
  });

  const d = new Date();
  const time = `${d.getMinutes()} - ${d.getSeconds()},${d.getMilliseconds()}`;
  const list = useMemo(() => Array.from(Array(4000).keys()), []);

  return (
    <div className="App">
      <Canvas />
      <header className="App-header">
        <p>Julia set</p>
        <p>{count}</p>
        <p>{time}</p>
      </header>
      <div>
        <div style={{ overflowY: "scroll", width: 200, height: 400 }}>
          {list.map((v) => {
            return <p key={v}>Option {v}</p>;
          })}
        </div>
      </div>
    </div>
  );
};
