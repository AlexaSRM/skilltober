export interface Config {
  accessKey: string;
  secretAccessKey: string;
  replyToAddress: string;
  domain: string;
  debugLevel: boolean;
}
const config: Config = {
  accessKey: process.env.CUSTOM_ACCESS_KEY_ID as string,
  secretAccessKey: process.env.CUSTOM_ACCESS_KEY_SECRET as string,
  replyToAddress: process.env.REPLY_TO_ADDRESS as string,
  domain: process.env.DOMAIN as string,
  debugLevel: (process.env.LOG_LEVEL as string) === "prod" ? false : true,
};

export default config;
