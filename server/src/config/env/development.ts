export default {
    env: 'development',
    MONGOOSE_DEBUG: true,
    jwtSecret: '0a6b944d-d2fb-46fc-a85e-0295c986cd9f',
    db: {
        dialect: 'mysql',
        username: 'root',
        password: 'example',
        database: 'authentication',
        host: 'localhost',
        port: 3306
    },
    port: 3000,
};