declare interface Window {
  APP: {
    USER: User
    // maybe define global app state type?
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    STATE: any
    TOKEN?: string
  }
}

declare interface AppConfig extends AppConfigBase {
  clientKey: string
}
