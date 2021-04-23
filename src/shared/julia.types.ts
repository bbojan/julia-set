export interface IJuliaOptions extends IJuliaResolution, IJuliaParams {}

export interface IJuliaResolution {
  width: number;
  height: number;
  factor?: number;
}

export interface IJuliaParams {
  creal: number;
  cimag: number;
}
