export interface IJuliaOptions extends IJuliaResolution, IJuliaParams {}

export interface IJuliaResolution {
  width: number;
  height: number;
  factor?: number;
  edge?: boolean;
}

export interface IJuliaParams {
  creal: number;
  cimag: number;
}
