/// <reference types="vite/client" />
// src/declarations.d.ts

declare namespace JSX {
    interface IntrinsicElements {
      'lord-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        trigger?: string;
      };
    }
  }
  