import * as winston from 'winston';

export function newLogger(name: string) {
  return  new (winston.Logger)({
    level: 'info', // TBD: use env var to set log level
    transports: [ new (winston.transports.Console)({ name }) ],
    timestamp: function() {
      return Date.now();
    },
    formatter: function(options) {
      return `${[options.name]} ${options.timestamp()} ${options.level.toUpperCase()} ${options.message}`;
    }
  });
}

