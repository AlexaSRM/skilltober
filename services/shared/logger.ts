import pino from 'pino';
import config from './config';
const Logger = pino({
    prettyPrint: config.debugLevel ? {colorize: true} : false
})
export default Logger;