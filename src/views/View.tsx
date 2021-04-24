import { FC, useMemo, useState } from "react";
import { CanvasCircle } from "./CanvasCircle";
import { CanvasMain } from "./CanvasMain";
import { CanvasWorker } from "./CanvasWorker";
import { Clock } from "./Clock";

export const View: FC<{}> = () => {
  const list = useMemo(() => Array.from(Array(10000).keys()), []);

  const [code, setCode] = useState("main");
  const [factor, setFactor] = useState(4);
  const [option, setOption] = useState(0);

  return (
    <div className="App">
      <div style={{ position: "relative", margin: 8 }}>
        {code === "main" && <CanvasMain factor={factor} />}
        {code === "worker" && <CanvasWorker factor={factor} />}
        <CanvasCircle />
      </div>
      <Clock />
      <div>
        <div style={{ width: 220, height: 640 }}>
          <p>
            <input
              type="radio"
              key={"main"}
              value={"main"}
              name={`Paint on Main thread`}
              checked={code === "main"}
              onChange={() => setCode("main")}
            />
            <span>Paint on Main thread</span>
          </p>
          <p>
            <input
              type="radio"
              key={"worker"}
              value={"worker"}
              name={`Paint on Worker thread`}
              checked={code === "worker"}
              onChange={() => setCode("worker")}
            />
            <span>Paint on Worker thread</span>
          </p>
        </div>
      </div>
      <div>
        <div style={{ width: 220, height: 640 }}>
          <p>
            <input
              type="radio"
              key={4}
              value={4}
              name={`Divide by 4`}
              checked={factor === 4}
              onChange={() => setFactor(4)}
            />
            <span>Divide by 4</span>
          </p>
          <p>
            <input
              type="radio"
              key={2}
              value={2}
              name={`Divide by 2`}
              checked={factor === 2}
              onChange={() => setFactor(2)}
            />
            <span>Divide by 2</span>
          </p>
          <p>
            <input
              type="radio"
              key={1}
              value={1}
              name={`Divide by 1`}
              checked={factor === 1}
              onChange={() => setFactor(1)}
            />
            <span>Divide by 1</span>
          </p>
        </div>
      </div>
      <div>
        <div style={{ overflowY: "scroll", width: 200, height: 640 }}>
          {list.map((v) => {
            return (
              <p key={v}>
                <input
                  type="radio"
                  key={v}
                  value={v}
                  name={`Option ${v}`}
                  checked={option === v}
                  onChange={(e) => setOption(+e.target.value)}
                />
                <span>Option {v}</span>
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};
