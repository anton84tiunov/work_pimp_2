import winston, { format } from 'winston';
import * as sourceMapSupport from 'source-map-support';
import callsite from 'callsite';

sourceMapSupport.install();

const internalModuleRegex = /node_modules|winston|logform/;

const logger = winston.createLogger({
  level: 'info',
  format: format.combine(
    format.label({ label: 'your-service' }),
    format.timestamp(),
    format.printf(({ level, message, label, timestamp }) => {
      const stack = callsite();
      const callerInfo = stack.find(site => !internalModuleRegex.test(site.getFileName()));

      if (callerInfo) {
        const fileName = callerInfo.getFileName();
        const lineNumber = callerInfo.getLineNumber();

        return `${timestamp} [${label}] ${fileName}:${lineNumber} ${level}: ${message}`;
      } else {
        return `${timestamp} [${label}] ${level}: ${message}`;
      }
    })
  ),
  defaultMeta: { service: 'your-service' },
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
  ],
});

export default logger;