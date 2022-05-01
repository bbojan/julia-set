import { useEffect, useRef } from "react";
import { createWorkerClient } from "../worker/worker.client";
import { IWorkerClient } from "../worker/worker.types";
import { delayed } from "./useTime";

export function useWorker() {
  const workerRef = useRef<IWorkerClient | null>(null);

  useEffect(() => {
    const worker = createWorkerClient();
    workerRef.current = worker;
    return () => {
      if (worker) {
        delayed(1).then(async () => {
          try {
            await worker.dispose();
          } catch (e) {}
        });
        workerRef.current = null;
      }
    };
  }, []);

  return workerRef;
}
