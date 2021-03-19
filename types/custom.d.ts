type WithChildren<T = Record<string, unknown>> = T & { children?: React.ReactNode }

declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.jpeg" {
  const value: string;
  export default value;
}
