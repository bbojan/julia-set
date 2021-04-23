declare const self: Window & typeof globalThis;

export function isInWorker() {
  return self.document === undefined;
}

export function fixReactRefreshInWorker() {
  if (isInWorker()) {
    //fixReactRefreshInWorker
    (self as any).$RefreshReg$ = () => {};
    (self as any).$RefreshSig$ = () => () => {};
  }
}

fixReactRefreshInWorker();

//
