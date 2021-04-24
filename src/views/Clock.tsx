import { FC, memo, useState } from "react";
import { formatedTime, useInterval } from "../hooks/useTime";

export const Clock: FC<{}> = memo(() => {
  const [count, setCount] = useState(0);

  useInterval(1, () => {
    setCount((c) => c + 1);
  });

  return (
    <header className="App-header">
      <p>Julia set</p>
      <p>{count}</p>
      <p>{formatedTime()}</p>
    </header>
  );
});
