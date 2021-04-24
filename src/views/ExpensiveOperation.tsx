import * as Comlink from "comlink";
import { FC, memo, useEffect, useState } from "react";
import { delayed } from "../hooks/useTime";
import { useWorker } from "../hooks/useWorker";

export const ExpensiveOperation: FC<{}> = memo(() => {
  const [status, setStatus] = useState(0);
  const [final, setFinal] = useState("");

  const workerRef = useWorker();

  const input = 5 * 1000 * 1000 * 1000;

  useEffect(() => {
    const worker = workerRef.current;
    if (worker) {
      const callback = (st: number) => setStatus(st);
      const ask = (v: number) => delayed(1).then(() => v * 3);

      worker
        .expensiveOperation(
          { value: input },
          Comlink.proxy(callback),
          Comlink.proxy(ask)
        )
        .then((o) => setFinal(o.result.toFixed()));
    }
  }, []);

  return (
    <div style={{ marginTop: 16, fontSize: 16 }}>
      <p>Expensive</p>
      <p>Operation</p>
      <p>input</p>
      <p>{input}</p>
      <p>done</p>
      <p>{Math.ceil(status + 1).toFixed()} %</p>
      <p>final result</p>
      <p>{final}</p>
    </div>
  );
});
