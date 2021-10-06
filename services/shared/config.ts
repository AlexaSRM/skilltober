export interface Config {
  accessKey: string;
  secretAccessKey: string;
  replyToAddress: string;
  domain: string;
}
const config: Config = {
  accessKey: process.env.ACCESS_KEY_ID as string,
  secretAccessKey: process.env.ACCESS_KEY_SECRET as string,
  replyToAddress: process.env.REPLY_TO_ADDRESS as string,
  domain: process.env.DOMAIN as string,
};

export default config;
