import pino from 'pino';
const Logger = pino({
    prettyPrint: {colorize: true}
})
export default Logger;