declare global {
  namespace NodeJS {
    interface ProcessEnv {
      TG_TOKEN: string
    }
  }
}

export {}
