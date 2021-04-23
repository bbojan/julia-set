declare module "comlink-loader!*" {
  class WebpackWorker extends Worker {
    constructor();

    calculate(options: any): Promise<any>;
  }

  export = WebpackWorker;
}
