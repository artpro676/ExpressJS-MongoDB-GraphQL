const config = {
    id: process.env.ID,
    port: process.env.PORT,
    db: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        name: process.env.DB_NAME,
        collection: process.env.DB_COLLECTION
    }
};

module.exports = config;
