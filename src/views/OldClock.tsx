import { FC, memo, useState } from "react";
import { formatedTime, useInterval } from "../hooks/useTime";

export const OldClock: FC<{}> = memo(() => {
  const [count, setCount] = useState(0);

  useInterval(1, () => {
    setCount((c) => c + 1);
  });

  const ts = formatedTime();

  return (
    <div>
      <p>Drag the yellow circle</p>
      <header className="App-header">
        <p>Julia set</p>
        <p>{count}</p>
        <p>{ts[0]}</p>
        <p>{ts[1]}</p>
      </header>
    </div>
  );
});
