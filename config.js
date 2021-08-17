const dotenv = require('dotenv');
dotenv.config();

function required(key, defaultValue = undefined) {
    const value = process.env[key] || defaultValue;
    if (value == null) {
        throw new Error(`Key ${key} is undefined`);
    }
    return value;
}

export const config = {
    host: {
        port: parseInt(required('HOST_PORT', 4747)),
    },
    mongo: {
        host: required('DB_MONGO_HOST'),
    }
}

