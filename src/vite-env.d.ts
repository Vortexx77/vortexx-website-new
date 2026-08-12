/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Endpoint the contact form submits enquiries to. */
  readonly VITE_CONTACT_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
