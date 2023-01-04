var winston = require('winston');
require('winston-daily-rotate-file');

const logger = winston.createLogger({
    level: 'silly',
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'DD-MM-YYYY HH:mm:ss.SSS'
        }),
        winston.format.printf(info => `[${info.timestamp}] ${info.level}: ${info.message}`)
    ),
    transports: [
        new (winston.transports.DailyRotateFile)({
            filename: './logs/log',
            datePattern: 'YYYY-MM-DD',
            maxSize: '200m',
            maxFiles: '2d'
        })
    ]
});

logger.add(new winston.transports.Console({
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple(),
        winston.format.timestamp({
            format: 'DD-MM-YYYY HH:mm:ss.SSS'
        }),
        winston.format.printf(info => `[${info.timestamp}] ${info.level}: ${info.message}`)
    )
}));
module.exports = logger;
