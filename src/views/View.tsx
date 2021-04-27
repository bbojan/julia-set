import { FC, useEffect, useMemo, useState } from "react";
import ReactList from "react-list";
import { CanvasCircle } from "./CanvasCircle";
import { CanvasMain } from "./CanvasMain";
import { CanvasWorker } from "./CanvasWorker";
import { Clock } from "./Clock";
import { ExpensiveOperation } from "./ExpensiveOperation";

export const View: FC<{}> = () => {
  const blurs = useMemo(() => Array.from(Array(14).keys()), []);
  const list = useMemo(() => Array.from(Array(10000).keys()), []);

  const [code, setCode] = useState("main");
  const [factor, setFactor] = useState(2);
  const [option, setOption] = useState(0);
  const [expensive, setExpensive] = useState(false);
  const [edge, setEdge] = useState(false);

  const [text, setText] = useState("");

  useEffect(() => {
    //
    fetch("https://unpkg.com/react@17.0.2/umd/react.development.js")
      .then((r) => r.text())
      .then((t) => {
        setText(t);
      });
  }, []);

  return (
    <div className="App">
      <div style={{ position: "relative", margin: 8 }}>
        {code === "main" && <CanvasMain factor={factor} edge={edge} />}
        {code === "worker" && <CanvasWorker factor={factor} edge={edge} />}
        <CanvasCircle />
      </div>
      <div>
        <Clock />
        <label>
          <p>Expensive Worker</p>
          <p>Operation</p>
          <input
            name="expensive"
            type="checkbox"
            checked={expensive}
            onChange={() => setExpensive((p) => !p)}
          />
        </label>
        {expensive && <ExpensiveOperation />}
      </div>
      <div style={{ width: 210 }}>
        <div style={{ marginBottom: 40 }}>
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
        <div>
          <label>
            <span>Edge (SLOW)</span>
            <input
              name="edge"
              type="checkbox"
              checked={edge}
              onChange={() => setEdge((e) => !e)}
            />
          </label>
        </div>
        <div>
          {blurs.map((v, i) => {
            const b = v * 2;
            return (
              <p key={i}>
                <input
                  type="radio"
                  key={i}
                  value={b}
                  name={`Blur ${b} px`}
                  checked={factor === b}
                  onChange={() => setFactor(b)}
                />
                <span>Blur {b} px</span>
              </p>
            );
          })}
        </div>
      </div>

      <div>
        <div style={{ overflowY: "scroll", width: 150, height: 640 }}>
          <ReactList
            type={"uniform"}
            useStaticSize={true}
            itemSizeGetter={() => 30}
            length={list.length}
            itemRenderer={(idx) => {
              const v = list[idx];
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
            }}
          />
        </div>
      </div>
      <div
        style={{
          overflowY: "scroll",
          width: 400,
          height: 640,
        }}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
};
