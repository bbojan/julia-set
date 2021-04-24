declare module "comlink-loader!*" {
  class WebpackWorker extends Worker {
    constructor();

    calculate(options: any): Promise<any>;

    expensiveOperation(
      options: any,
      callback: (status: number) => void,
      ask: (v: number) => Promise<number>
    ): Promise<any>;
  }

  export = WebpackWorker;
}
