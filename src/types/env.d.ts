declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number

      TG_TOKEN: string
      WEBHOOK_DOMAIN: string
    }
  }
}

export {};
