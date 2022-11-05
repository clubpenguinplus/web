import config from "../config";

export default {
  production: {
    client: "mysql2",
    connection: {
      ...config.server.database,
    },
    pool: {
      min: 0,
      max: 50,
      createTimeoutMillis: 30000,
      acquireTimeoutMillis: 60000,
      idleTimeoutMillis: 1000,
      reapIntervalMillis: 1000,
      createRetryIntervalMillis: 1000,
    },
  },
};
