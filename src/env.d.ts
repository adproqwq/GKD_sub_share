/// <reference types="@farmfe/core/client" />

interface Window {
  __NetworkExtension__: {
    GM_info: import('vite-plugin-monkey/dist/client').MonkeyWindow['GM_info'];
    GM_xmlhttpRequest: import('vite-plugin-monkey/dist/client').MonkeyWindow['GM_xmlhttpRequest'];
  };
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}