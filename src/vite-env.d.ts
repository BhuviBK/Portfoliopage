/// <reference types="vite/client" />

declare module '*.pdf' {
  const content: string;
  export { content as default };
}
