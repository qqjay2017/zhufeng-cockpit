

interface Window {
    NoCaptcha: any;
  }

declare namespace NodeJS {
  interface Process {
    browser: boolean;
  }
}

declare const __DEV__: boolean;
declare const particlesJS: any;