declare module "*.json" {
    const value: any;
    export default value;
}

declare interface AppConfig {
    cdnUrl: string
}

declare const APP_CONFIG: AppConfig;
