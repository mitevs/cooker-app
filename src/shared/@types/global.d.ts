declare interface AppContext {
  user?: User
  setUser: (user: User) => void
}

declare interface AppConfig {
  cdnUrl: string
}

declare const APP_CONFIG: AppConfig

declare const IS_SERVER: boolean
