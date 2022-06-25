declare global {
  interface Window {
    NoCaptcha: any;
  }
}
interface Window {
  NoCaptcha: string;
}

declare namespace NodeJS {
  interface Process {
    browser: boolean;
  }
}

declare const __DEV__: boolean;
declare const particlesJS: any;

